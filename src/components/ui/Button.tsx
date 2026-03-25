type Props = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export default function Button({ children, variant = "primary" }: Props) {
  const base = "px-6 py-3 rounded-lg transition"

  const styles = {
    primary: "bg-amber-700 hover:bg-amber-600 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white"
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}