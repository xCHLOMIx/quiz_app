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
  idle: "bg-white hover:bg-[#ffe875]",
  selected: "bg-[#8cd8ff]",
  correct: "bg-[#72e283] shadow-[#22a133]/20",
  incorrect: "bg-[#ff9bb9] shadow-[#da3465]/20",
  locked: "bg-zinc-50 border-zinc-300 opacity-60 pointer-events-none shadow-none",
};

export function ChoiceButton({
  choice,
  index,
  state = "idle",
  onClick,
  disabled = false,
}: ChoiceButtonProps) {
  const isLocked = state === "locked";
  return (
    <button
      className={`flex w-full items-center gap-3 group border-2 border-black p-3 text-left font-black text-black cursor-pointer rounded-xl shadow-[3px_3px_0_#111111] transition-all duration-150 ${
        isLocked
          ? ""
          : "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111]"
      } ${stateClasses[state]}`}
      type="button"
      onClick={onClick}
      disabled={disabled || isLocked}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-xs font-black text-black group-hover:bg-black group-hover:text-white transition duration-200">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-2">
        {choice.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-36 w-fit max-w-full border-2 border-black bg-white object-contain rounded-lg"
            src={choice.image}
            alt={choice.text ?? `Choice ${index + 1}`}
          />
        ) : null}
        {choice.text ? <span className="wrap-break-word text-sm sm:text-base">{choice.text}</span> : null}
      </span>
    </button>
  );
}
