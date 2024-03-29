import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary bgclr">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler btnmt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link active bdr" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bdr" href="/">About</a>
        </li>
          <li className="nav-item">
            <a href="/" className="nav-link bdr">Contact</a>
          </li>

      </ul>
      <form className="d-flex conthidemob" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
  )
}

Navbar.propTypes = {title : PropTypes.string}

Navbar.defaultProps = {
  title: 'Subodh'
};