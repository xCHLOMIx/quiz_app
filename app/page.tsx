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
    <main className="min-h-screen px-4 py-8 text-black sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col gap-5 py-4">
        <section className="border-2 border-black bg-white p-5 shadow-[4px_4px_0_#111111] sm:p-7 rounded-2xl">
          <p className="mb-2.5 inline-block border-2 border-black bg-[#ff7aa2] px-2.5 py-0.5 text-xs font-black uppercase rounded-lg">
            Choose your mode
          </p>
          <h1 className="text-4xl font-black uppercase leading-none sm:text-5xl">Quiz App</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ModeButton href="/full" variant="green">
              Full Mode
            </ModeButton>
            <ModeButton href="/test" variant="blue">
              Test Mode
            </ModeButton>
          </div>
        </section>

        <section className="border-2 border-black bg-[#6ecbff] p-5 shadow-[4px_4px_0_#111111] sm:p-6 rounded-2xl">
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
    </main>
  );
}
