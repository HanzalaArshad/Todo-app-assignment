import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#2E5077"}}>
  <div className="container-fluid d-flex justify-content-between ">
    <a className="navbar-brand text-white" href="#">Hanzala Arshad </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
      <div className="navbar-nav">
        <a className="nav-link active text-warning" aria-current="page" href="#">TodoList</a>
        <a className="nav-link text-warning" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar