type ProgressBarProps = {
  value: number;
  total: number;
  label?: string;
};

export function ProgressBar({ value, total, label }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm font-black uppercase">
        <span>{label ?? "Progress"}</span>
        <span>
          {value} / {total}
        </span>
      </div>
      <div className="h-7 overflow-hidden border-4 border-black bg-white">
        <div
          className="h-full border-r-4 border-black bg-[#54d66a]"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  );
}
