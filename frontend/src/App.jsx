import { useState } from 'react'
import './App.css'
import { Search, UserRound, ShoppingBag, Menu, X } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">

      <header className="navbar">

        <h1 className="logo">VELORA</h1>

<nav className={`nav-links ${menuOpen ? 'active' : ''}`}>        
    <a href="/">Home</a>
          <a href="/women">Women</a>
          <a href="/men">Men</a>
          <a href="/new-arrivals">New Arrivals</a>
          <a href="/sale">Sale</a>
        </nav>

        <div className="nav-icons">

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X /> : <Menu />}
  </button>

  <Search />
  <UserRound />
  <ShoppingBag />

</div>

      </header>
      <section className="hero">

  <div className="hero-content">
    <p className="hero-label">NEW SEASON COLLECTION 2026</p>

    <h2>
      Style that
      <br />
      speaks for you.
    </h2>

    <p className="hero-description">
      Discover timeless fashion and express
      your unique personality.
    </p>

    <button className="shop-btn">
      SHOP COLLECTION →
    </button>
  </div>

</section>

    </div>
  )
}

export default App