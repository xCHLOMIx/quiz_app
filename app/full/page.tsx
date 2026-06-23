"use client";

import { useEffect, useMemo, useState } from "react";
import type { QuizChoice, QuizQuestion } from "@/data/questions";
import { quizQuestions } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
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
    shuffledChoices: shuffleArray(question.choices),
  }));
}

export default function FullModePage() {
  const [passedIds, setPassedIds] = useState<number[]>([]);
  const [queue, setQueue] = useState<SessionQuestion[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<QuizChoice | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);

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
    if (!window.confirm("Reset Full Mode progress?")) {
      return;
    }

    resetProgress();
    setPassedIds([]);
    setQueue(createSessionQuestions(quizQuestions));
    setSelectedChoice(null);
    setFeedback(null);
  }

  if (!currentQuestion && completed >= total) {
    return (
      <main className="min-h-screen bg-[#54d66a] px-4 py-8 text-black sm:px-6">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl items-center">
          <section className="w-full border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-10">
            <h1 className="text-4xl font-black uppercase sm:text-4xl">You completed all questions!</h1>
            <p className="mt-6 text-xl font-black">
              Completed: {total} / {total}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ModeButton href="/" variant="blue">
                Back to Home
              </ModeButton>
              <ModeButton onClick={handleResetProgress} variant="pink">
                Reset Progress
              </ModeButton>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#6ecbff] px-4 py-6 text-black sm:px-6">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <header className="flex flex-col gap-4 border-4 border-black bg-white p-4 shadow-[6px_6px_0_#000] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black uppercase">Full Mode</p>
            <h1 className="text-3xl font-black uppercase">Master every question</h1>
          </div>
          <ModeButton href="/" variant="yellow">
            Back to Home
          </ModeButton>
        </header>

        <ProgressBar label="Completed" total={total} value={completed} />

        {feedback ? (
          <div
            className={`border-4 border-black p-4 text-xl font-black uppercase shadow-[4px_4px_0_#000] ${feedback === "correct" ? "bg-[#54d66a]" : "bg-[#ff7aa2]"
              }`}
          >
            {feedback === "correct" ? "Correct!" : "Incorrect. Review the correct answer."}
          </div>
        ) : null}

        {feedback === "incorrect" ? (
          <ModeButton onClick={handleContinueAfterIncorrect} variant="yellow">
            Next Question
          </ModeButton>
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
    </main>
  );
}
