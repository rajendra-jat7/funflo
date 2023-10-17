// Book.js
import React from 'react';
import styles from './Book.module.css';
import BgImg from '../../assets/ticket.jpg';

const Book = () => {
  return (
    <section className={styles.bookSection} style={{ backgroundImage: `url(${BgImg})` }}>
      <div className={styles.bookContent}>
        <h2 className={styles.heading}>Book Your Christmas Cruise</h2>
        <p className={styles.description}>Get in the holiday spirit with our special Christmas event!</p>
        <p>
          Enjoy a <span className={styles.discount}>15% discount</span> on your booking.
        </p>
        <p className={styles.dateAndTime}>
          Date: December 25th, 2023<br />
          Time: 6:00 PM - 10:00 PM
        </p>
        <button className={`btn btn-danger ${styles.bookButton}`}>Book Now</button>
      </div>
    </section>
  );
};

export default Book;
