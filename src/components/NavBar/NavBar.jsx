import React from 'react';

export const NavBar = ({ titulo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"> {titulo} </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* 
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
          </li>
        */}
          <li className="nav-item">
            <a className="nav-link" href="#">Singles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mazos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Accesorios</a>
          </li>
          {/* 
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          */}
            <li className="nav-item">
              <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
            </li>
          </ul>
      </div>
    </nav>
  )
}
