"use client";

import { useEffect, useMemo, useState } from "react";
import type { QuizChoice, QuizQuestion } from "@/data/questions";
import { quizQuestions } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { ConfirmModal } from "@/components/ConfirmModal";
import {
  getCompletedCount,
  getRemainingQuestions,
  loadPassedIds,
  resetProgress,
  savePassedIds,
  shuffleArray,
} from "@/lib/quiz";

type Feedback = "correct" | "incorrect" | null;
type SessionQuestion = QuizQuestion & {
  shuffledChoices: QuizChoice[];
};

function createSessionQuestions(questions: QuizQuestion[]): SessionQuestion[] {
  return shuffleArray(questions).map((question) => ({
    ...question,
    shuffledChoices: question.choices,
  }));
}

export default function FullModePage() {
  const [passedIds, setPassedIds] = useState<number[]>([]);
  const [queue, setQueue] = useState<SessionQuestion[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<QuizChoice | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = quizQuestions.length;
  const completed = useMemo(() => getCompletedCount(passedIds), [passedIds]);
  const currentQuestion = queue[0];

  useEffect(() => {
    window.setTimeout(() => {
      const storedIds = loadPassedIds();
      setPassedIds(storedIds);
      setQueue(createSessionQuestions(getRemainingQuestions(storedIds)));
    }, 0);
  }, []);

  function handleAnswer(choice: QuizChoice) {
    if (!currentQuestion || feedback) {
      return;
    }

    setSelectedChoice(choice);

    if (choice.correct) {
      const nextPassedIds = Array.from(new Set([...passedIds, currentQuestion.id]));
      setPassedIds(nextPassedIds);
      savePassedIds(nextPassedIds);
      setFeedback("correct");

      window.setTimeout(() => {
        setQueue((currentQueue) => currentQueue.slice(1));
        setSelectedChoice(null);
        setFeedback(null);
      }, 750);
      return;
    }

    setFeedback("incorrect");
  }

  function handleContinueAfterIncorrect() {
    if (!currentQuestion) {
      return;
    }

    setQueue((currentQueue) => {
      const [missedQuestion, ...rest] = currentQueue;
      const insertIndex = rest.length === 0 ? 0 : Math.floor(Math.random() * rest.length) + 1;
      const nextQueue = [...rest];
      nextQueue.splice(insertIndex, 0, missedQuestion);
      return nextQueue;
    });
    setSelectedChoice(null);
    setFeedback(null);
  }

  function handleResetProgress() {
    setIsModalOpen(true);
  }

  function handleConfirmReset() {
    resetProgress();
    setPassedIds([]);
    setQueue(createSessionQuestions(quizQuestions));
    setSelectedChoice(null);
    setFeedback(null);
    setIsModalOpen(false);
  }

  if (!currentQuestion && completed >= total) {
    return (
      <main className="min-h-screen bg-[#72e283]/20 backdrop-blur-[2px] px-4 py-8 text-black sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <section className="w-full border-2 border-black bg-white p-6 shadow-[4px_4px_0_#111111] sm:p-8 rounded-2xl">
            <h1 className="text-2xl font-black uppercase sm:text-3xl">You completed all questions!</h1>
            <p className="mt-4 text-lg font-black">
              Completed: {total} / {total}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ModeButton href="/" variant="blue">
                Back to Home
              </ModeButton>
              <ModeButton onClick={handleResetProgress} variant="pink">
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

  return (
    <main className="min-h-screen bg-[#8cd8ff]/20 backdrop-blur-[2px] px-4 py-6 text-black sm:px-6 flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        <header className="flex flex-col gap-3 border-2 border-black bg-white p-3.5 shadow-[3px_3px_0_#111111] rounded-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase text-zinc-500">Full Mode</p>
            <h1 className="text-xl sm:text-2xl font-black uppercase leading-tight">Master every question</h1>
          </div>
          <ModeButton href="/" variant="yellow">
            Back to Home
          </ModeButton>
        </header>

        <ProgressBar label="Completed" total={total} value={completed} />

        {feedback ? (
          <div
            className={`border-2 border-black p-3.5 text-md sm:text-lg font-black uppercase rounded-xl shadow-[3px_3px_0_#111111] ${
              feedback === "correct" ? "bg-[#72e283]" : "bg-[#ff9bb9]"
            }`}
          >
            {feedback === "correct" ? "Correct!" : "Incorrect. Review the correct answer."}
          </div>
        ) : null}

        {feedback === "incorrect" ? (
          <div className="flex w-full justify-end">
            <ModeButton onClick={handleContinueAfterIncorrect} variant="yellow">
              Next Question
            </ModeButton>
          </div>
        ) : null}

        {currentQuestion ? (
          <QuestionCard
            choices={currentQuestion.shuffledChoices}
            disabled={Boolean(feedback)}
            onSelect={handleAnswer}
            question={currentQuestion}
            revealAnswer={Boolean(feedback)}
            selectedChoice={selectedChoice}
          />
        ) : null}
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
