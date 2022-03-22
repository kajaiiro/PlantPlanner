import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../static_files/Logo.png'
import PlantPlanner from '../static_files/PlantPlanner.png'
function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="PlantPlannerLogoImg"></img>
            <img src={PlantPlanner} alt="LogoText"></img>
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Plants">
                    Plants
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;