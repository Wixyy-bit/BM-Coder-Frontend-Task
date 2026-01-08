import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const loggedIn = location.pathname

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav ${(loggedIn == "/login" || loggedIn == "/signup") ? "logged" : ""}`}>
      <div className="logo">
        <h3>MediaJel</h3>
      </div>

      {(
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <div className={`Allinks ${menuOpen ? "open" : ""}`}>
        <NavLink
        className={({ isActive }) =>
            isActive ? 'active-link' : 'inactive-link'
          }
        to="/whowehelp" onClick={closeMenu}>WHO WE HELP</NavLink>

        <NavLink to="/" onClick={closeMenu}>WHAT WE DO</NavLink>
        <NavLink to="/" onClick={closeMenu}>HOW WE DO IT</NavLink>
        <NavLink to="/" onClick={closeMenu}>WHY MEDIAJEL</NavLink>
        <NavLink to="/" onClick={closeMenu}>RESOURCES</NavLink>
      </div>

      <div className={`CTAs ${menuOpen ? "open" : ""}`}>
        <button
          id="login"
          onClick={() => {
            closeMenu()
            navigate("/login")
          }}
        >
          LOGIN
        </button>

        <button
          id="connect"
          onClick={() => {
            closeMenu()
            navigate("/signup")
          }}
        >
          LET'S CONNECT
        </button>
      </div>
    </nav>
  )
}

export default Navbar


