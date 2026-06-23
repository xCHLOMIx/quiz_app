import { ModeButton } from "@/components/ModeButton";

type ResultsScreenProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

export function ResultsScreen({ score, total, onRetry }: ResultsScreenProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 60;

  return (
    <section className="border-4 border-black w-full bg-white p-6 shadow-[6px_6px_0_#000] sm:p-8">
      <div className={`mb-6 border-4 border-black p-5 py-4 ${passed ? "bg-[#54d66a]" : "bg-[#ff7aa2]"}`}>
        <p className="text-2xl font-black uppercase">Grade: {passed ? "Pass" : "Fail"}</p>
      </div>
      <div className="space-y-3 text-2xl font-black">
        <p>
          Score: {score} / {total}
        </p>
        <p>Percentage: {percentage}%</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ModeButton onClick={onRetry} variant="yellow">
          Retry Test
        </ModeButton>
        <ModeButton href="/" variant="blue">
          Back to Home
        </ModeButton>
      </div>
    </section>
  );
}
