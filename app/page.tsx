"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { ProgressBar } from "@/components/ProgressBar";
import { ConfirmModal } from "@/components/ConfirmModal";
import { getCompletedCount, loadPassedIds, resetProgress } from "@/lib/quiz";
import { useTheme } from "@/lib/theme";
import { useUser } from "@/lib/user";
import { FiSun, FiMoon, FiUser } from "react-icons/fi";

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();
  const { email } = useUser();
  const [completed, setCompleted] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = quizQuestions.length;
  const remaining = Math.max(0, total - completed);

  function refreshProgress() {
    setCompleted(getCompletedCount(loadPassedIds()));
  }

  useEffect(() => {
    window.setTimeout(refreshProgress, 0);
  }, []);

  function handleResetProgress() {
    setIsModalOpen(true);
  }

  function handleConfirmReset() {
    resetProgress();
    refreshProgress();
    setIsModalOpen(false);
  }

  return (
    <main className="min-h-screen px-4 py-8 text-black dark:text-white sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col gap-5 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/account"
            className="flex items-center gap-2 border-2 border-black bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 font-black uppercase text-xs sm:text-sm rounded-xl shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#111111] dark:hover:shadow-[4.5px_4.5px_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111] dark:active:shadow-[1.5px_1.5px_0_#000000] transition-all duration-150"
            title="Account"
          >
            <FiUser size={16} />
            <span className="hidden sm:inline">
              {email ? "Profile" : "Account"}
            </span>
          </Link>

          {/* <button
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
          </button> */}
        </div>

        <section className="border-2 border-black bg-white dark:bg-zinc-900 p-5 shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] sm:p-7 rounded-2xl transition-colors duration-200">
          <p className="mb-2.5 inline-block border-2 border-black bg-[#ff7aa2] px-2.5 py-0.5 text-xs font-black uppercase rounded-lg text-black">
            Choose your mode
          </p>
          <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl text-black dark:text-white">Quiz App</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ModeButton href="/full" variant="green">
              Full Mode
            </ModeButton>
            <ModeButton href="/test" variant="blue">
              Test Mode
            </ModeButton>
          </div>
        </section>

        <section className="border-2 border-black bg-[#6ecbff] p-5 shadow-[4px_4px_0_#111111] sm:p-6 rounded-2xl text-black">
          <h2 className="mb-4 text-2xl font-black uppercase">Full Mode Summary</h2>
          <ProgressBar label="Completed" total={total} value={completed} />
          <div className="mt-4 grid gap-1 text-lg font-black">
            <p>
              Completed: {completed} / {total}
            </p>
            <p>Remaining: {remaining}</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {completed > 0 ? (
              <ModeButton href="/full" variant="green">
                Continue Full Mode
              </ModeButton>
            ) : null}
            <ModeButton onClick={handleResetProgress} variant="pink" disabled={completed === 0}>
              Reset Progress
            </ModeButton>
          </div>
        </section>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmReset}
        title="Reset Progress?"
        message="Are you sure you want to reset your progress? This action cannot be undone."
      />
    </main>
  );
}
