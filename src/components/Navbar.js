import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/home' class="navbar-brand" href="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/home' class="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li class="nav-item">
          <Link to='/about' class="nav-link active" aria-disabled="true">About</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}
