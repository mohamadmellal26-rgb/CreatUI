import React from 'react';
import styles from './HeroSection3.module.css';

export const HeroSection3: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>▲</span> Saasternity
        </div>
        <nav>
          <ul className={styles.navMenu}>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </nav>
        <a href="#" className={styles.btnBlack}>
          <span>Try for free</span>
          <video 
            src="https://cdnl.iconscout.com/lottie/premium/thumb/arrow-right-animation-gif-download-4633533.mp4" 
            className={styles.lottieVideo} 
            autoPlay loop muted playsInline 
          />
        </a>
      </header>

      <main className={styles.heroMain}>
        <h1 className={styles.title}>Image generation at your fingertips</h1>
        <p className={styles.description}>
          Create breathtaking images with AI that understands your vision. 
          No design skills needed—just describe what you imagine and watch it come to life.
        </p>
        <div className={styles.heroActions}>
          <a href="#" className={styles.btnBlack}>
            <span>Try for free</span>
            <video 
              src="https://cdnl.iconscout.com/lottie/premium/thumb/arrow-right-animation-gif-download-4633533.mp4" 
              className={styles.lottieVideo} 
              autoPlay loop muted playsInline 
            />
          </a>
          <a href="#" className={styles.linkDoc}>Read Documentation →</a>
        </div>
      </main>
    </div>
  );
};