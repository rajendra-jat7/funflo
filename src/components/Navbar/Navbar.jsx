import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className={styles.funflow}>
        <div className={styles.image}>
          <span className={styles.brand}>FUNFLO</span>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#about-us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#events-on-fleet">
              Events on Fleet
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#daily-cruise-packages">
              Daily Cruise Packages
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navItem}`} href="#contact-us">
              Contact Us
            </a>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
