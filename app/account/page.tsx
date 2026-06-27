"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiSun, FiMoon, FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useTheme } from "@/lib/theme";
import { useUser } from "@/lib/user";
import { loadPassedIds, getCompletedCount } from "@/lib/quiz";
import { quizQuestions } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { SyncConflictModal } from "@/components/SyncConflictModal";
import { Toast } from "@/components/Toast";

export default function AccountPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { email, login, logout, isLoading } = useUser();

  const [isSignUp, setIsSignUp] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [codeDigits, setCodeDigits] = useState<string[]>(Array(6).fill(""));
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Compute stats for logged in user
  const [completedCount, setCompletedCount] = useState(0);
  const totalQuestions = quizQuestions.length;

  // Conflict modal states
  const [conflictData, setConflictData] = useState<{
    email: string;
    dbPassedIds: number[];
    localPassedIds: number[];
    mergedPassedIds: number[];
  } | null>(null);
  const [isConflictModalOpen, setIsConflictModalOpen] = useState(false);

  const handleChooseLocal = () => {
    if (conflictData) {
      login(conflictData.email, conflictData.localPassedIds);
      setCodeDigits(Array(6).fill(""));
      setConflictData(null);
      setIsConflictModalOpen(false);
    }
  };

  const handleChooseDb = () => {
    if (conflictData) {
      login(conflictData.email, conflictData.dbPassedIds);
      setCodeDigits(Array(6).fill(""));
      setConflictData(null);
      setIsConflictModalOpen(false);
    }
  };

  const handleChooseMerge = () => {
    if (conflictData) {
      login(conflictData.email, conflictData.mergedPassedIds);
      setCodeDigits(Array(6).fill(""));
      setConflictData(null);
      setIsConflictModalOpen(false);
    }
  };

  const handleCancelConflict = () => {
    setConflictData(null);
    setIsConflictModalOpen(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (email) {
      setCompletedCount(loadPassedIds().length);
    }
  }, [email]);

  const handleOtpChange = (index: number, value: string) => {
    const cleanVal = value.replace(/\D/g, "");
    if (!cleanVal) {
      const nextDigits = [...codeDigits];
      nextDigits[index] = "";
      setCodeDigits(nextDigits);
      return;
    }

    const nextDigits = [...codeDigits];
    nextDigits[index] = cleanVal[cleanVal.length - 1]; // take only the last character entered
    setCodeDigits(nextDigits);

    // Auto-focus next input
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!codeDigits[index] && index > 0) {
        // Clear previous input and focus it
        const nextDigits = [...codeDigits];
        nextDigits[index - 1] = "";
        setCodeDigits(nextDigits);
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const nextDigits = [...codeDigits];
        nextDigits[index] = "";
        setCodeDigits(nextDigits);
      }
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const nextDigits = [...codeDigits];

    for (let i = 0; i < 6; i++) {
      nextDigits[i] = pasteData[i] || "";
    }
    setCodeDigits(nextDigits);

    // Focus the last populated field or the last field
    const focusIndex = Math.min(pasteData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const code = codeDigits.join("");

    if (!emailInput || code.length !== 6) {
      setError("Please enter a valid 6-digit passcode");
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = isSignUp ? "/api/auth/signup" : "/api/auth/signin";
      const payload = {
        email: emailInput,
        code: code,
        passedIds: loadPassedIds(), // Pass local storage progress to merge
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (isSignUp) {
        setSuccess("Account created successfully! Logging you in...");
        // Auto sign in after sign up
        setTimeout(() => {
          login(data.email, data.passedIds);
          setCodeDigits(Array(6).fill(""));
          setIsSubmitting(false);
        }, 1200);
      } else {
        const dbPassedIds = data.passedIds || [];
        const localPassedIds = loadPassedIds();

        const hasDbProgress = dbPassedIds.length > 0;
        const hasLocalProgress = localPassedIds.length > 0;

        const isSame = dbPassedIds.length === localPassedIds.length &&
                       dbPassedIds.every((id: number) => localPassedIds.includes(id));

        if (hasDbProgress && hasLocalProgress && !isSame) {
          const mergedPassedIds = Array.from(new Set([...localPassedIds, ...dbPassedIds]));
          setConflictData({
            email: data.email,
            dbPassedIds,
            localPassedIds,
            mergedPassedIds,
          });
          setIsConflictModalOpen(true);
          setIsSubmitting(false);
        } else {
          let resolvedPassedIds = dbPassedIds;
          if (hasLocalProgress && !hasDbProgress) {
            resolvedPassedIds = localPassedIds;
          }
          login(data.email, resolvedPassedIds);
          setCodeDigits(Array(6).fill(""));
          setIsSubmitting(false);
        }
      }
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-6 text-black dark:text-zinc-100 sm:px-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl space-y-5 py-4">
        {/* Navigation Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center border-2 border-black bg-white dark:bg-zinc-800 text-black dark:text-white size-10 rounded-xl py-5 w-12 shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111] dark:hover:shadow-[4px_4px_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111] dark:active:shadow-[1.5px_1.5px_0_#000000] transition-all duration-150 cursor-pointer"
            title="Back to Home"
          >
            <FiArrowLeft size={20} />
          </Link>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 border-2 border-black bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2.5 font-black uppercase text-xs sm:text-sm rounded-xl shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#111111] dark:hover:shadow-[4.5px_4.5px_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111] dark:active:shadow-[1.5px_1.5px_0_#000000] transition-all duration-150"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <>
                <FiMoon size={16} />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            ) : (
              <>
                <FiSun size={16} />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            )}
          </button>
        </header>

        {/* Content Container */}
        {isLoading ? (
          <div className="border-2 border-black bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] text-center font-black">
            Loading Account details...
          </div>
        ) : email ? (
          /* LOGGED IN ACCOUNT DASHBOARD */
          <section className="border-2 border-black bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] transition-colors duration-200 space-y-6">
            <div className="flex items-center gap-3.5 border-b-2 border-black pb-4">
              <div className="size-12 rounded-full border-2 border-black bg-[#6ecbff] flex items-center justify-center text-black">
                <FiUser size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black uppercase text-zinc-500 dark:text-zinc-400">Logged In As</p>
                <p className="text-lg font-black truncate text-black dark:text-zinc-100">{email}</p>
              </div>
            </div>

            <div className="border-2 border-black bg-gray-100 p-4 rounded-xl shadow-[3px_3px_0_#111111] text-black">
              <h2 className="text-md font-black uppercase mb-1">Full Mode Progress Backup</h2>
              <p className="text-xs font-medium mb-3">Your progress is automatically saved to the database.</p>
              <div className="text-2xl font-black">
                {completedCount} <span className="text-sm font-black">/ {totalQuestions} Questions Passed</span>
              </div>
            </div>

            <div className="pt-2">
              <ModeButton onClick={logout} variant="pink" className="w-full">
                Log Out
              </ModeButton>
            </div>
          </section>
        ) : (
          /* AUTHENTICATION FORM */
          <section className="border-2 border-black bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] transition-colors duration-200">
            <h1 className="text-2xl font-black uppercase mb-4 text-black dark:text-zinc-100">
              {isSignUp ? "Create Account" : "Sign In"}
            </h1>



            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black uppercase flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
                  <FiMail /> Email Address
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@example.com"
                  required
                  disabled={isSubmitting}
                  className="border-2 border-black bg-white dark:bg-zinc-800 p-4 rounded-xl text-black dark:text-white text-sm font-bold shadow-[2px_2px_0_#111111] dark:shadow-[2px_2px_0_#000000] focus:outline-none focus:bg-gray-100 dark:focus:bg-zinc-700 transition"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-xs font-black uppercase flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
                  <FiLock /> 6-Digit Passcode
                </label>
                <div className="flex items-center gap-2.5">
                    <div className="flex-1 grid grid-cols-6 sm:grid-cols-6 gap-2">
                      {codeDigits.map((digit, idx) => (
                        <input
                          key={idx}
                          ref={(el) => {
                            inputRefs.current[idx] = el;
                          }}
                          type={showPasscode ? "text" : "password"}
                          value={digit}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                          onPaste={idx === 0 ? handleOtpPaste : undefined}
                          placeholder="•"
                          maxLength={1}
                          required
                          disabled={isSubmitting}
                          className="border-2 border-black bg-white dark:bg-zinc-800 text-black dark:text-white size-12 sm:size-14 text-center text-xl sm:text-2xl font-black rounded-xl shadow-[2px_2px_0_#111111] dark:shadow-[2px_2px_0_#000000] focus:outline-none focus:bg-gray-100 dark:focus:bg-zinc-700 transition"
                        />
                      ))}
                    </div>
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    disabled={isSubmitting}
                    className="flex max-sm:hidden items-center justify-center border-2 border-black bg-white dark:bg-zinc-800 text-black dark:text-white size-12 sm:size-14 rounded-xl shadow-[2px_2px_0_#111111] dark:shadow-[2px_2px_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_#111111] transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                    title={showPasscode ? "Hide Passcode" : "Show Passcode"}
                  >
                    {showPasscode ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center min-h-11 border-2 border-black bg-[#54d66a] hover:bg-[#72e283] text-black font-black uppercase text-xs sm:text-sm rounded-xl shadow-[3px_3px_0_#111111] cursor-pointer transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting
                    ? "Authenticating..."
                    : isSignUp
                      ? "Create Account"
                      : "Sign In"}
                </button>
              </div>
            </form>

            <div className="mt-5 text-end">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                  setSuccess(null);
                }}
                className="text-xs font-black uppercase hover:underline underline-offset-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition duration-200 cursor-pointer"
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Need an account? Sign Up"}
              </button>
            </div>
          </section>
        )}
      </div>

      {conflictData && (
        <SyncConflictModal
          isOpen={isConflictModalOpen}
          localCount={conflictData.localPassedIds.length}
          dbCount={conflictData.dbPassedIds.length}
          mergedCount={conflictData.mergedPassedIds.length}
          onChooseLocal={handleChooseLocal}
          onChooseDb={handleChooseDb}
          onChooseMerge={handleChooseMerge}
          onCancel={handleCancelConflict}
        />
      )}

      {error && (
        <Toast
          message={error}
          type="error"
          onClose={() => setError(null)}
        />
      )}

      {success && (
        <Toast
          message={success}
          type="success"
          onClose={() => setSuccess(null)}
        />
      )}
    </main>
  );
}
