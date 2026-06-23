import { quizQuestions, type QuizQuestion } from "@/data/questions";

export const PASSED_IDS_STORAGE_KEY = "quiz-full-mode-passed-ids";

export function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function loadPassedIds(): number[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(PASSED_IDS_STORAGE_KEY);
    if (!storedValue) {
      return [];
    }

    const parsedValue: unknown = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter((id): id is number => Number.isFinite(id));
  } catch {
    return [];
  }
}

export function savePassedIds(ids: number[]): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    PASSED_IDS_STORAGE_KEY,
    JSON.stringify(Array.from(new Set(ids))),
  );
}

export function resetProgress(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(PASSED_IDS_STORAGE_KEY);
}

export function getRandomQuestions(limit: number): QuizQuestion[] {
  return shuffleArray(quizQuestions).slice(0, Math.min(limit, quizQuestions.length));
}

export function getCompletedCount(passedIds: number[]): number {
  const passedSet = new Set(passedIds);
  return quizQuestions.filter((question) => passedSet.has(question.id)).length;
}

export function getRemainingQuestions(passedIds: number[]): QuizQuestion[] {
  const passedSet = new Set(passedIds);
  return quizQuestions.filter((question) => !passedSet.has(question.id));
}
