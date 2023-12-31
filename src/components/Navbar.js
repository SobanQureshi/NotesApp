import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link to='' className="navbar-brand" >iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className={`nav-link  ${location.pathname === '/'? "active":"" }`} aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to='/about' className={`nav-link  ${location.pathname === '/about'? "active":"" }`} aria-disabled="true">About</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}
