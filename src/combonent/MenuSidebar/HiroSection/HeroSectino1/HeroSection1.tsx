import React from 'react';
import styles from './HeroSection1.module.css'; // استيراد كـ Module

export const HeroSection1: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoBadge}>A</span> Leadgen
        </div>
        <div className={styles.navLinks}>
          <a href="#">Product</a>
          <a href="#">Resources ▾</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.navActions}>
          <a href="#">Login</a>
          <a href="#" className={styles.btnBlack}>Try for free</a>
        </div>
      </nav>

      <main className={styles.heroMain}>
        <div className={styles.fundingBadge}>
          We've raised $69M seed funding →
        </div>
        <h1 className={styles.heroTitle}>Get warm leads for your business in minutes.</h1>
        <p className={styles.heroDesc}>
          Our AI-powered platform identifies and qualifies potential customers, 
          so you can focus on closing deals instead of chasing cold leads.
        </p>
        <div className={styles.heroButtons}>
          <a href="#" className={styles.btnBlack}>Get Started →</a>
          <a href="#" className={styles.btnSecondary}>Learn More</a>
        </div>
      </main>
    </div>
  );
};