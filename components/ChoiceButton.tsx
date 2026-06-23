import type { QuizChoice } from "@/data/questions";

type ChoiceState = "idle" | "selected" | "correct" | "incorrect" | "locked";

type ChoiceButtonProps = {
  choice: QuizChoice;
  index: number;
  state?: ChoiceState;
  onClick?: () => void;
  disabled?: boolean;
};

const stateClasses: Record<ChoiceState, string> = {
  idle: "bg-white hover:bg-[#ffe156]",
  selected: "bg-[#6ecbff]",
  correct: "bg-[#54d66a]",
  incorrect: "bg-[#ff7aa2]",
  locked: "bg-zinc-100",
};

export function ChoiceButton({
  choice,
  index,
  state = "idle",
  onClick,
  disabled = false,
}: ChoiceButtonProps) {
  return (
    <button
      className={`flex w-full items-center gap-4 group border-4 border-black p-4 text-left font-black text-black cursor-pointer shadow-[4px_4px_0_#000] transition active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_#000] ${stateClasses[state]}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex size-10 shrink-0 items-center group-hover:bg-black group-hover:text-white transition duration-200 justify-center border-4 border-black bg-white text-black">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-3">
        {choice.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-44 w-fit max-w-full border-4 border-black bg-white object-contain"
            src={choice.image}
            alt={choice.text ?? `Choice ${index + 1}`}
          />
        ) : null}
        {choice.text ? <span className="wrap-break-word text-base sm:text-lg">{choice.text}</span> : null}
      </span>
    </button>
  );
}
