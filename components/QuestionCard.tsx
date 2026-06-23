import type { QuizChoice, QuizQuestion } from "@/data/questions";
import { ChoiceButton } from "@/components/ChoiceButton";

type QuestionCardProps = {
  question: QuizQuestion;
  choices: QuizChoice[];
  selectedChoice?: QuizChoice | null;
  revealAnswer?: boolean;
  onSelect: (choice: QuizChoice) => void;
  disabled?: boolean;
};

export function QuestionCard({
  question,
  choices,
  selectedChoice,
  revealAnswer = false,
  onSelect,
  disabled = false,
}: QuestionCardProps) {
  return (
    <section className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_#000] sm:p-7">
      <div className="space-y-5">
        <p className="text-xl font-black leading-snug text-black sm:text-2xl">
          {question.questionText}
        </p>
        {question.questionImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-64 w-full border-4 border-black py-4 bg-white object-contain"
            src={question.questionImage}
            alt="Question reference"
          />
        ) : null}
      </div>

      <div className="mt-6 grid gap-4">
        {choices.map((choice, index) => {
          const isSelected = selectedChoice === choice;
          const state = revealAnswer
            ? choice.correct
              ? "correct"
              : isSelected
                ? "incorrect"
                : "locked"
            : isSelected
              ? "selected"
              : "idle";

          return (
            <ChoiceButton
              choice={choice}
              disabled={disabled}
              index={index}
              key={`${choice.text ?? "image"}-${choice.image ?? "text"}-${index}`}
              onClick={() => onSelect(choice)}
              state={state}
            />
          );
        })}
      </div>
    </section>
  );
}
