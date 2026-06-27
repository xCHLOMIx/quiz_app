import { ModeButton } from "./ModeButton";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

export function ConfirmModal({ isOpen, onClose, onConfirm, title, message }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-sm border-2 border-black bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] animate-scale-up transition-colors duration-200">
        <h3 className="text-xl font-black uppercase text-black dark:text-zinc-100 mb-1.5">{title}</h3>
        <p className="text-sm font-black text-zinc-600 dark:text-zinc-400 mb-5">{message}</p>
        <div className="flex justify-end gap-3">
          <ModeButton onClick={onClose} variant="white">
            Cancel
          </ModeButton>
          <ModeButton onClick={onConfirm} variant="pink">
            Reset
          </ModeButton>
        </div>
      </div>
    </div>
  );
}
