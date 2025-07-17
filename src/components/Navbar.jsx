import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">THE BARBERSHOP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['team', 'services', 'pricing', 'offer', 'footer'].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className="nav-link"
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
