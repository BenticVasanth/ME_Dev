import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import bwslogo from "../../assets/BWT_Logo_Color.jpg"
import { NavLink } from 'react-router-dom'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Dropdown } from 'react-bootstrap'
 import { RiMenuUnfoldLine } from 'react-icons/ri'

function Navbar({ setToggle }) {
  const [isOpen, setIsopen] = useState(false);
  const onToggleHander = (toggle) => {
    
    setIsopen(!isOpen)
    setToggle(!isOpen)
  }
  const [showDropdown, setShowDropdown] = useState(false);
  const urls = window.location.pathname.split('/');
   return (
    <>
      {urls.includes("dashboard") ?
        <div className="navbar-nav navbar-fixed-top mb-1" style={{ borderBottom: '3px solid #FEDD56' }}>

          <div className="container-fluid mt-3">
            <div className="row">

              <div className='col-lg-1 col-md-2   m-auto'>
                <RiMenuUnfoldLine className='text-dark ' size={23} onClick={onToggleHander} />

              </div>
              <div className="col-lg-2 col-md-3  ">
                <img className="d-inline-block" src={logo} width="200" height="50" alt="Logo" />

              </div>
              <div className="col-lg-7 col-md-5  ">
                <nav className="navbar navbar-expand-lg  ">
                  <li className="nav-item active mobile-view text-white">
                    <RiMenuUnfoldLine size={23} onClick={onToggleHander} />
                  </li>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mt-2  " style={{ marginLeft: "auto" }}>


                      <li className="nav-item" style={{ marginRight: "15px" }}>
                        <Dropdown
                          onMouseLeave={() => setShowDropdown(false)}
                          onMouseOver={() => setShowDropdown(true)}
                          style={{ width: '166px' }}
                        >
                          <Dropdown.Toggle
                            style={{ borderRadius: "20px" }}
                            className="main-style"
                            id="dropdown-basic"
                          >
                            Hi, User
                          </Dropdown.Toggle>

                          <Dropdown.Menu show={showDropdown}>
                            <Dropdown.Item href="#/action-1">
                              Change password
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Logout
                            </Dropdown.Item>

                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-2 col-md-3  ">
                <a href="/SabbathDay/Dashboard"><img src={bwslogo} width="200" height="72" alt="BWS Logo" /></a>
              </div>
            </div>
          </div>
         </div>
        :

        <div className="navbar-nav " style={{
          borderBottom: "3px solid #FEDD56"
        }}>

          <div className="container mb-2 mt-3">
            <div className="row">


              <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 ">
                <img className="d-inline-block" src={logo} width="200" height="50" alt="Logo" />

              </div>
              <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
                <nav className="navbar navbar-expand-lg  " >
                  <li className="nav-item active mobile-view text-white">
                    <AiOutlineMenuFold size={20} onClick={onToggleHander} />
                  </li>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mt-2  " style={{ marginLeft: "auto" }}>

                      <li className="nav-item " style={{ marginRight: "15px" }}>
                        <NavLink className="btn btn-outline   bnav-link" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ marginRight: "15px" }}>
                        <NavLink exact className="btn btn-outline  bnav-link" href="/">
                          Sign in
                        </NavLink>
                      </li>
                      <li className="nav-item" style={{ marginRight: "15px" }}>
                        <NavLink className="btn btn-outline  bnav-link" to="/create">
                          Register
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                <a href="/SabbathDay/Dashboard"><img src={bwslogo} width="200" height="72" alt="BWS Logo" /></a>
              </div>
            </div>
          </div>
          
        </div>
      }

    </>
  )
}

export default Navbar