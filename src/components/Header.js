import React from 'react'
import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <div className='header'>
        <nav>
            <ul>
                <NavLink 
                  to='/'
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink 
                  to="/coup-de-coeur"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li>Coup de coeur</li>
                </NavLink>
            </ul>
        </nav>
        <h1>OMAR MOVIES : REACT DEV  </h1>
    </div>
  )
}



