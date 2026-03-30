'use client'
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",    label: "Blogs" },
  { href: "/contacts", label: "Contacts" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700">

      {/* Main bar */}
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-3">

        {/* Logo / Name */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            My Portfolio
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            Gamaliel C Octobre
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black dark:hover:text-white transition text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side — toggle + hamburger */}
        <div className="flex items-center gap-2">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={22} className="text-gray-900 dark:text-white" />
              : <Menu size={22} className="text-gray-900 dark:text-white" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-4 gap-3 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 hover:text-black dark:hover:text-white transition text-sm"
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