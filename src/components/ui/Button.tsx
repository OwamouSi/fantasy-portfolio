type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]",
    secondary:
      "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}