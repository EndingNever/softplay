import React from 'react';
import Buttons from '../buttons/Buttons';
import styles from './MainDisplay.module.scss'

const MainDisplay = () => {
  return (
    <div className={styles.mainDisplay}>
      <div className={styles.bgImg}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.heroText}>
          ELEVATE THE PLAY AT YOUR NEXT EVENT
        </h1>
        <p className={styles.infoText}>
          Entertain the littlest guests at your next event with our luxury soft play, giant ball pits, and modern bounce houses. It is our pleasure to bring the fun to you for any occasion! We take great pride in making sure that your children's event rental experience is clean, safe, and fun without sacrificing aesthetics.
        </p>
      </div>
      <Buttons text={"Let's Play"} />
      <Buttons text={"Let's Bounce"} />
      <Buttons text={"Let's Ball"} />
    </div>
  );
}

export default MainDisplay;
