import React, { useState } from 'react';
import HeroImg1 from '../../assets/hero1.jpg';
import HeroImg2 from '../../assets/hero2.jpg';
import HeroImg3 from '../../assets/hero3.jpg';
import styles from './Hero.module.css';

function Hero() {
  const texts = [
    "A Corporate Gathering at Cruise",
    "Spectacular Views on the Cruise",
    "Unforgettable Cruise Experience"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="heroCarousel" className={`carousel slide ${styles.container}`} data-ride="carousel" onSlide={handleSlide}>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={HeroImg1} alt="First slide" className={`d-block w-100 ${styles.hero}`} />
          <div className={`carousel-caption ${styles.caption}`}>
            <h1 className={styles.centeredText}>{texts[0]}</h1>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={HeroImg2} alt="Second slide" className={`d-block w-100 ${styles.hero}`} />
          <div className={`carousel-caption ${styles.caption}`}>
            <h1 className={styles.centeredText}>{texts[1]}</h1>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={HeroImg3} alt="Third slide" className={`d-block w-100 ${styles.hero}`} />
          <div className={`carousel-caption ${styles.caption}`}>
            <h1 className={styles.centeredText}>{texts[2]}</h1>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" ariahidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Hero;
