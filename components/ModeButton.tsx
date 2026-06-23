import Link from "next/link";

type ModeButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "yellow" | "blue" | "pink" | "green" | "white";
  disabled?: boolean;
};

const variantClasses = {
  yellow: "bg-[#ffe156] hover:bg-[#ffd000]",
  blue: "bg-[#6ecbff] hover:bg-[#45bfff]",
  pink: "bg-[#ff7aa2] hover:bg-[#ff5d8f]",
  green: "bg-[#54d66a] hover:bg-[#38c950]",
  white: "bg-white hover:bg-zinc-100",
};

export function ModeButton({
  href,
  children,
  onClick,
  variant = "yellow",
  disabled = false,
}: ModeButtonProps) {
  const className = `inline-flex min-h-14 items-center justify-center border-4 border-black px-5 py-3 text-center text-md font-black uppercase text-black hover:shadow-[6px_6px_0_#000] cursor-pointer transition hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#000] ${variantClasses[variant]} ${
    disabled ? "pointer-events-none opacity-50" : ""
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
