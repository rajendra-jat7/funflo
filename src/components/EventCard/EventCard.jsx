import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ event }) => {
  return (
    <div className={styles.eventcardbg}>
        <div className={styles.eventcard}>
        <img src={event.image} alt={event.name} />
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p>Price: ${event.price}</p>
        </div>
    </div>
  );
};

export default EventCard;
