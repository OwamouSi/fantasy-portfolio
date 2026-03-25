import { useState } from "react"

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg">Portfolio</h1>

        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* mobile button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(prev => !prev)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => {
                scrollTo(link.id)
                setIsOpen(false)
              }}
              className="text-gray-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}