type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className="p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
      {children}
    </div>
  )
}