import { ModeButton } from "./ModeButton";

type SyncConflictModalProps = {
  isOpen: boolean;
  localCount: number;
  dbCount: number;
  mergedCount: number;
  onChooseLocal: () => void;
  onChooseDb: () => void;
  onChooseMerge: () => void;
  onCancel: () => void;
};

export function SyncConflictModal({
  isOpen,
  localCount,
  dbCount,
  mergedCount,
  onChooseLocal,
  onChooseDb,
  onChooseMerge,
  onCancel,
}: SyncConflictModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md border-2 border-black bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-[6px_6px_0_#111111] dark:shadow-[6px_6px_0_#000000] animate-scale-up transition-colors duration-200">
        <h3 className="text-2xl font-black uppercase text-black dark:text-zinc-100 mb-3 border-b-2 border-black dark:border-zinc-700 pb-2">
          Sync Progress Conflict
        </h3>
        
        <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-5">
          We found progress saved on this device (local storage) and progress saved in the cloud (MongoDB). How would you like to handle this?
        </p>

        <div className="space-y-4 mb-6">
          {/* Local storage progress card */}
          <div className="border-2 border-black bg-[#ffe156] p-4 rounded-xl shadow-[3px_3px_0_#111111] text-black">
            <h4 className="text-xs font-black uppercase text-zinc-700 mb-1">Local Device Progress</h4>
            <div className="text-lg font-black">
              {localCount} Questions Passed
            </div>
          </div>

          {/* DB progress card */}
          <div className="border-2 border-black bg-[#6ecbff] p-4 rounded-xl shadow-[3px_3px_0_#111111] text-black">
            <h4 className="text-xs font-black uppercase text-zinc-700 mb-1">Cloud Progress (MongoDB)</h4>
            <div className="text-lg font-black">
              {dbCount} Questions Passed
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <ModeButton onClick={onChooseMerge} variant="green" className="w-full">
            Merge Both ({mergedCount} Questions)
          </ModeButton>
          
          <div className="grid grid-cols-2 gap-3">
            <ModeButton onClick={onChooseLocal} variant="yellow" className="w-full">
              Keep Local
            </ModeButton>
            <ModeButton onClick={onChooseDb} variant="blue" className="w-full">
              Keep Cloud
            </ModeButton>
          </div>

          <ModeButton onClick={onCancel} variant="white" className="w-full mt-2">
            Cancel Sign In
          </ModeButton>
        </div>
      </div>
    </div>
  );
}
