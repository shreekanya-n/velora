
import { useState } from 'react'
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Sale', href: '/sale' },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f8f5ef] text-[#25221e]">

      {/* NAVBAR */}
      <header className="relative z-20 flex h-20 items-center justify-between border-b border-[#e8e1d8] bg-[#f8f5ef] px-5 md:px-[6%]">

        {/* Mobile menu button */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-semibold tracking-[5px] md:text-[28px]"
        >
          VELORA
        </a>

        {/* Navigation links */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full w-full flex-col items-center gap-6 border-b border-[#e8e1d8] bg-[#f8f5ef] py-7 md:static md:flex md:w-auto md:flex-row md:gap-9 md:border-0 md:bg-transparent md:py-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium transition-colors duration-300 hover:text-[#a88764]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Navbar icons */}
        <div className="flex items-center gap-4 md:gap-6">

          <button aria-label="Search">
            <Search size={21} strokeWidth={1.6} />
          </button>

          <button aria-label="Account">
            <UserRound size={21} strokeWidth={1.6} />
          </button>

          <button aria-label="Shopping bag">
            <ShoppingBag size={21} strokeWidth={1.6} />
          </button>

        </div>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="grid grid-cols-1 md:min-h-[620px] md:grid-cols-[0.9fr_1.1fr]">

          {/* Hero content */}
          <div className="flex flex-col justify-center px-7 py-16 sm:px-12 md:px-12 lg:px-20">

            <p className="mb-6 text-xs font-medium uppercase tracking-[4px] text-[#987b60]">
              The Velora Edit
            </p>

            <h1 className="mb-6 max-w-xl text-5xl font-normal leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              The art of
              <br />
              everyday style.
            </h1>

            <p className="mb-9 max-w-md text-base leading-8 text-[#756d64]">
              Discover thoughtfully selected styles
              that make every moment yours.
            </p>

            <button className="inline-flex w-fit items-center gap-3 bg-[#25221e] px-8 py-4 text-xs font-medium tracking-[2px] text-white transition-all duration-300 hover:bg-[#987b60]">
              EXPLORE COLLECTION
              <span aria-hidden="true">→</span>
            </button>

          </div>

          {/* Hero image */}
          <div className="h-[430px] overflow-hidden md:h-full md:min-h-[620px]">

            <img
              src="https://harbison.studio/cdn/shop/files/Harbison-Studio_AW24_Look_17_hero_17834480-d959-4589-8eb9-661051a9516a.jpg?v=1736888162&width=2048"
              alt="Elegant beige fashion collection"
              className="h-full w-full object-cover object-center"
            />

          </div>

        </section>
      </main>

    </div>
  )
}

export default App
