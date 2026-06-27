import { useEffect, useState } from "react";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
  duration?: number;
};

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 250); // Matches the slideUp animation duration (0.25s)
  };

  return (
    <div
      className={`fixed top-4 left-1/2 z-50 w-full sm:w-max max-w-11/12 px-4 ${
        isExiting ? "animate-slide-up" : "animate-slide-down"
      }`}
    >
      <div
        className={`flex items-center gap-3 border-2 border-black p-4 rounded-xl shadow-[4px_4px_0_#111111] dark:shadow-[4px_4px_0_#000000] text-black ${
          type === "success" ? "bg-[#72e283]" : "bg-[#ff9bb9]"
        }`}
      >
        <span className="flex-shrink-0">
          {type === "success" ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
        </span>
        <div className="flex-grow text-xs sm:text-sm font-black uppercase leading-tight">
          {message}
        </div>
        <button
          onClick={handleClose}
          type="button"
          className="flex-shrink-0 hover:bg-black/10 p-1 rounded transition cursor-pointer"
          title="Close notification"
        >
          <FiX size={16} />
        </button>
      </div>
    </div>
  );
}
