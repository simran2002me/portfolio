import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Simran</div>
        Toggle
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Protfolio</li>
            <li>Testimonial</li>
          </ul>
        </div><button className="button n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
