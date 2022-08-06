import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = ({title}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to={'/'}> {title}</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/category/singles'} className="nav-link">Singles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/category/mazos'} className="nav-link">Mazos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/category/accesorios'} className="nav-link">Accesorios</NavLink>
          </li>
            <li className="nav-item">
              <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar;
