import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img alt="PlantPlannerLogoImg"></img>
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