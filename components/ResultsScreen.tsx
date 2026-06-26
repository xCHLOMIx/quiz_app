import { ModeButton } from "@/components/ModeButton";

type ResultsScreenProps = {
  score: number;
  total: number;
  onRetry: () => void;
  onReview?: () => void;
};

export function ResultsScreen({ score, total, onRetry, onReview }: ResultsScreenProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 60;

  return (
    <section className="border-2 border-black w-full bg-white p-5 sm:p-7 rounded-2xl shadow-[4px_4px_0_#111111]">
      <div className={`mb-5 border-2 border-black p-4 py-3 rounded-xl ${passed ? "bg-[#54d66a]" : "bg-[#ff7aa2]"}`}>
        <p className="text-xl font-black uppercase">Grade: {passed ? "Pass" : "Fail"}</p>
      </div>
      <div className="space-y-2 text-xl font-black">
        <p>
          Score: {score} / {total}
        </p>
        <p>Percentage: {percentage}%</p>
      </div>
      
      {onReview && (
        <div className="mt-6">
          <ModeButton onClick={onReview} variant="pink">
            Review Failed Questions
          </ModeButton>
        </div>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
