"use client";

import { useMemo, useState } from "react";
import type { QuizChoice, QuizQuestion } from "@/data/questions";
import { ModeButton } from "@/components/ModeButton";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsScreen } from "@/components/ResultsScreen";
import { getRandomQuestions, shuffleArray } from "@/lib/quiz";

type TestQuestion = QuizQuestion & {
  shuffledChoices: QuizChoice[];
};

function createTestQuestions(): TestQuestion[] {
  return getRandomQuestions(20).map((question) => ({
    ...question,
    shuffledChoices: question.choices,
  }));
}

export default function TestModePage() {
  const [questions, setQuestions] = useState<TestQuestion[]>(createTestQuestions);
  const [answers, setAnswers] = useState<(QuizChoice | null)[]>(() =>
    Array.from({ length: Math.min(20, createTestQuestions().length) }, () => null),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  function startTest() {
    const nextQuestions = createTestQuestions();

    setQuestions(nextQuestions);
    setAnswers(Array.from({ length: nextQuestions.length }, () => null));
    setCurrentIndex(0);
    setShowResults(false);
    setReviewMode(false);
    setReviewIndex(0);
  }

  const answeredCount = answers.filter(Boolean).length;
  const currentQuestion = questions[currentIndex];
  const score = useMemo(
    () => answers.reduce((total, answer) => total + (answer?.correct ? 1 : 0), 0),
    [answers],
  );
  const canFinish = questions.length > 0 && answeredCount === questions.length;

  function handleSelect(choice: QuizChoice) {
    setAnswers((currentAnswers) => {
      const nextAnswers = [...currentAnswers];
      nextAnswers[currentIndex] = choice;
      return nextAnswers;
    });
  }

  const failedQuestions = useMemo(() => {
    if (!showResults) return [];
    return questions
      .map((q, i) => ({ question: q, answer: answers[i], originalIndex: i }))
      .filter((item) => item.answer === null || !item.answer.correct);
  }, [questions, answers, showResults]);

  if (showResults) {
    if (reviewMode && failedQuestions.length > 0) {
      const currentFailed = failedQuestions[reviewIndex];
      return (
        <main className="min-h-screen bg-[#ff9bb9]/20 dark:bg-[#ff9bb9]/5 px-4 py-6 text-black dark:text-zinc-100 sm:px-6 flex justify-center">
          <div className="w-full max-w-2xl space-y-4">
            <header className="flex flex-col gap-3 border-2 border-black bg-white dark:bg-zinc-900 p-3.5 shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] rounded-xl sm:flex-row sm:items-center sm:justify-between transition-colors duration-200">
              <div>
                <p className="text-xs font-black uppercase text-zinc-500">Review Mode</p>
                <h1 className="text-xl sm:text-2xl font-black uppercase leading-tight">
                  Failed Question {reviewIndex + 1} / {failedQuestions.length}
                </h1>
              </div>
            </header>

            <QuestionCard
              choices={currentFailed.question.shuffledChoices}
              onSelect={() => {}}
              question={currentFailed.question}
              selectedChoice={currentFailed.answer}
              revealAnswer={true}
              disabled={true}
            />

            <nav className="grid gap-3 sm:grid-cols-2">
              <ModeButton
                onClick={() => setReviewIndex((index) => Math.max(0, index - 1))}
                variant="white"
                disabled={reviewIndex === 0}
              >
                Previous
              </ModeButton>
              <ModeButton
                onClick={() => setReviewIndex((index) => Math.min(failedQuestions.length - 1, index + 1))}
                variant="blue"
                disabled={reviewIndex >= failedQuestions.length - 1}
              >
                Next
              </ModeButton>
            </nav>

            <nav className="mt-6 grid gap-3 sm:grid-cols-2">
              <ModeButton onClick={startTest} variant="yellow">
                Retry Test
              </ModeButton>
              <ModeButton href="/" variant="blue">
                Back to Home
              </ModeButton>
            </nav>
          </div>
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-[#faf4b7]/20 dark:bg-[#faf4b7]/5 px-4 py-8 text-black dark:text-zinc-100 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <ResultsScreen 
            onRetry={startTest} 
            score={score} 
            total={questions.length} 
            onReview={failedQuestions.length > 0 ? () => setReviewMode(true) : undefined}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#ff9bb9]/20 dark:bg-[#ff9bb9]/5 px-4 py-6 text-black dark:text-zinc-100 sm:px-6 flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        <header className="flex flex-col gap-3 border-2 border-black bg-white dark:bg-zinc-900 p-3.5 shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] rounded-xl sm:flex-row sm:items-center sm:justify-between transition-colors duration-200">
          <div>
            <p className="text-xs font-black uppercase text-zinc-500">Test Mode</p>
            <h1 className="text-xl sm:text-2xl font-black uppercase leading-tight">
              Question {Math.min(currentIndex + 1, questions.length)} / {questions.length}
            </h1>
          </div>
          <ModeButton href="/" variant="yellow">
            Back to Home
          </ModeButton>
        </header>

        <ProgressBar label="Answered" total={questions.length} value={answeredCount} />

        {currentQuestion ? (
          <QuestionCard
            choices={currentQuestion.shuffledChoices}
            onSelect={handleSelect}
            question={currentQuestion}
            selectedChoice={answers[currentIndex]}
          />
        ) : null}

        <nav className="grid gap-3 sm:grid-cols-3">
          <ModeButton
            onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            variant="white"
            disabled={currentIndex === 0}
          >
            Previous
          </ModeButton>
          <ModeButton
            onClick={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}
            variant="blue"
            disabled={currentIndex >= questions.length - 1}
          >
            Next
          </ModeButton>
          <ModeButton onClick={() => setShowResults(true)} variant="green" disabled={!canFinish}>
            Finish Test
          </ModeButton>
        </nav>

        {!canFinish ? (
          <p className="border-2 border-black bg-white dark:bg-zinc-900 p-2.5 text-center text-sm font-black rounded-xl shadow-[3px_3px_0_#111111] dark:shadow-[3px_3px_0_#000000] text-black dark:text-zinc-100 transition-colors duration-200">
            Answer all questions before viewing results.
          </p>
        ) : null}
      </div>
    </main>
  );
}
