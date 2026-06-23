"use client";

import { useEffect, useState } from "react";
import { quizQuestions } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { ProgressBar } from "@/components/ProgressBar";
import { getCompletedCount, loadPassedIds, resetProgress } from "@/lib/quiz";

export default function LandingPage() {
  const [completed, setCompleted] = useState(0);
  const total = quizQuestions.length;
  const remaining = Math.max(0, total - completed);

  function refreshProgress() {
    setCompleted(getCompletedCount(loadPassedIds()));
  }

  useEffect(() => {
    window.setTimeout(refreshProgress, 0);
  }, []);

  function handleResetProgress() {
    if (!window.confirm("Reset Full Mode progress?")) {
      return;
    }

    resetProgress();
    refreshProgress();
  }

  return (
    <main className="min-h-screen bg-[#f7f048] px-4 py-8 text-black sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center gap-6">
        <section className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-10">
          <p className="mb-3 inline-block border-4 border-black bg-[#ff7aa2] px-3 py-1 text-sm font-black uppercase">
            Choose your mode
          </p>
          <h1 className="text-6xl font-black uppercase leading-none sm:text-6xl">Quiz App</h1>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ModeButton href="/full" variant="green">
              Full Mode
            </ModeButton>
            <ModeButton href="/test" variant="blue">
              Test Mode
            </ModeButton>
          </div>
        </section>

        <section className="border-4 border-black bg-[#6ecbff] p-5 shadow-[6px_6px_0_#000] sm:p-7">
          <h2 className="mb-5 text-3xl font-black uppercase">Full Mode Summary</h2>
          <ProgressBar label="Completed" total={total} value={completed} />
          <div className="mt-5 grid gap-2 text-xl font-black">
            <p>
              Completed: {completed} / {total}
            </p>
            <p>Remaining: {remaining}</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
    </main>
  );
}
