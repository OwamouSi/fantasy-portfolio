type Props = {
  children: React.ReactNode
  bg?: string
  id?: string
}

export default function Section({ children, bg, id }: Props) {
  return (
    <section
      id={id}
      className="min-h-screen py-32 bg-cover bg-center"
      style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
    >
      {children}
    </section>
  )
}