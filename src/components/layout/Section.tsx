type Props = {
  children: React.ReactNode
  bg?: string
}

export default function Section({ children, bg }: Props) {
  return (
    <section
      className="min-h-screen py-32 bg-cover bg-center"
      style={{
        backgroundImage: bg ? `url(${bg})` : undefined
      }}
    >
      {children}
    </section>
  )
}