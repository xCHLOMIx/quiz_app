import Link from "next/link";

type ModeButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "yellow" | "blue" | "pink" | "green" | "white";
  disabled?: boolean;
};

const variantClasses = {
  yellow: "bg-[#ffe156] hover:bg-[#ffe875]",
  blue: "bg-[#6ecbff] hover:bg-[#8cd8ff]",
  pink: "bg-[#ff7aa2] hover:bg-[#ff9bb9]",
  green: "bg-[#54d66a] hover:bg-[#72e283]",
  white: "bg-white hover:bg-zinc-50",
};

export function ModeButton({
  href,
  children,
  onClick,
  variant = "yellow",
  disabled = false,
}: ModeButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center border-2 border-black px-4 py-2 text-center text-xs sm:text-sm font-black uppercase text-black rounded-xl shadow-[3px_3px_0_#111111] cursor-pointer transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1.5px_1.5px_0_#111111] ${variantClasses[variant]} ${
    disabled ? "pointer-events-none opacity-50 shadow-none border-zinc-300" : ""
  }`;

  if (href) {
    return (
      <Link className={className} href={href} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button" disabled={disabled}>
      {children}
    </button>
  );
}
