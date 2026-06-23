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
      <div className="w-full max-w-sm border-2 border-black bg-white p-5 rounded-2xl shadow-[4px_4px_0_#111111] animate-scale-up">
        <h3 className="text-xl font-black uppercase text-black mb-1.5">{title}</h3>
        <p className="text-sm font-black text-zinc-600 mb-5">{message}</p>
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
