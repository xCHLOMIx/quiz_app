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
    <section className="border-2 border-black bg-white p-4 sm:p-6 rounded-2xl shadow-[4px_4px_0_#111111]">
      <div className="space-y-4">
        <p className="text-lg sm:text-xl font-black leading-snug text-black">
          {question.questionText}
        </p>
        {question.questionImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-56 w-full border-2 border-black py-3 bg-white object-contain rounded-xl"
            src={question.questionImage}
            alt="Question reference"
          />
        ) : null}
      </div>

      <div className="mt-5 grid gap-3">
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
