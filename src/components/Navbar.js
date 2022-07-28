import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        
        <NavLink to="/" 
        className={({isActive}) => {
            return isActive ? "activeLink" : ""
        }}
        
        >acceuil</NavLink>
        
        <NavLink to="/contact" style={({isActive}) => {
            return isActive ? {color: "maroon"} : {color: "violet"}
        }}>contact</NavLink>

<NavLink to="/service" style={({isActive}) => {
            return isActive ? {color: "maroon"} : {color: "violet"}
        }}>service</NavLink>
    </nav>
  )
}
