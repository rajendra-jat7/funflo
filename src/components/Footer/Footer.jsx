import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          <h3 className={styles.heading}>QUICK LINKS</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#events">Events on Fleet</a></li>
            <li><a href="#packages">Daily Cruise Packages</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h3 className={styles.heading}>GET IN TOUCH</h3>
          <p>BOOKING OFFICE</p>
          <p>07, Kurthal Road, Nandsi, Bhinay, Ajmer, Rajasthan - 305628</p>
          <p>REGISTERED OFFICE</p>
          <p>07, Kurthal Road, Nandsi, Bhinay, Ajmer, Rajasthan - 305628</p>
          <p>Boat Party FUNFLO Packages: +91-8875781413</p>
          <p>Cruise Wedding In FUNFLO Packages: info@funflos.in</p>
        </div>
        <div className={styles.socialMedia}>
          <h3 className={styles.heading}>SOCIAL MEDIA</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>(C) 2023 - FUNFLO .com All Rights Reserved.</p>
        <p>Developed & Marketed By Rajendra Jat</p>
      </div>
    </footer>
  );
};

export default Footer;
