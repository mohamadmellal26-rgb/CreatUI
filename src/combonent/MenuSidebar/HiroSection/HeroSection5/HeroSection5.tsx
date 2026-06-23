import React from 'react';
import styles from './HeroSection5.module.css';

export const HeroSection5: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.gridBackground} />

      <main className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>
            Idea to website in
            <span className={styles.underline} />
          </span>
          <br />
          <span className={styles.highlight}>
            minutes, not hours.
            <span className={styles.underline} />
          </span>
        </h1>

        <p className={styles.description}>
          Get the best beam tracking services in the world with our state of the art, 
          cutting edge beam detection technology.
        </p>

        <div className={styles.actions}>
          <a href="#buy" className={styles.btnPrimary}>Buy now</a>
          <a href="#explore" className={styles.btnSecondary}>Explore beams</a>
        </div>
      </main>
    </div>
  );
};