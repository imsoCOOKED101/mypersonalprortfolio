'use client'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",    label: "Blogs" },
  { href: "/contacts", label: "Contacts" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60">

      {/* Main bar */}
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-3">

        {/* Logo / Name */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold">My Portfolio</h1>
          <p className="text-xs md:text-sm text-gray-500">Gamaliel C Octobre</p>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-500 transition text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-4 gap-3 text-gray-700 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 hover:text-gray-500 transition text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

    </header>
  )
}