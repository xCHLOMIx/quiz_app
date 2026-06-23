type ProgressBarProps = {
  value: number;
  total: number;
  label?: string;
};

export function ProgressBar({ value, total, label }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-4 text-xs font-black uppercase tracking-wider text-black">
        <span>{label ?? "Progress"}</span>
        <span>
          {value} / {total} ({percentage}%)
        </span>
      </div>
      <div className="h-5 overflow-hidden border-2 border-black bg-white rounded-full">
        <div
          className="h-full outline-2 bg-[#54d66a] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  );
}
