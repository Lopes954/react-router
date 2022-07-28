import React from 'react'
import { Link , Outlet } from 'react-router-dom'

export default function Service() {
  return (
    <div>
      <h1>section service</h1>

      <nav>
        <Link to="/service/developpement">Développement</Link>
        <Link to="/service/cybersecurity">service de cybersecurté</Link>
      </nav>
      <Outlet />
    </div>
  )
}
