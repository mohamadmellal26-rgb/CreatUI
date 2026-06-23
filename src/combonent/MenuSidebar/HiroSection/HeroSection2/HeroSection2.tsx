import React from 'react';
import styles from './HeroSection2.module.css';

export const HeroSection2: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>something ai</div>
        <ul className={styles.navMenu}>
          <li><a href="#" className={styles.navLink}>Features ▾</a></li>
          <li><a href="#" className={styles.navLink}>Pricing</a></li>
          <li><a href="#" className={styles.navLink}>Blog</a></li>
        </ul>
        <div className={styles.navActions}>
          <a href="#" className={styles.navLink}>Sign in</a>
          <a href="#" className={styles.btnPrimary}>Get started</a>
        </div>
      </header>

      <main className={styles.heroGrid}>
        <div className={styles.titleGroup}>
          <a href="#" className={styles.fundingLink}>Read our series A $20M Funding Round →</a>
          <h1 className={styles.mainTitle}>Create the best<br />average<br />product today.</h1>
        </div>
        
        <div className={styles.titleGroup} style={{paddingTop: '40px'}}>
          <p className={styles.description}>
            Our AI-powered platform identifies and qualifies potential customers, so you can focus on closing deals instead of chasing cold leads.
          </p>
          <div className={styles.actionButtons}>
            <a href="#" className={styles.btnPrimary}>Get started</a>
            <a href="#" className={styles.btnSecondary}>Sign in</a>
          </div>
        </div>
      </main>

      <div className={styles.browserMockup}>
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <div className={styles.dot} style={{background: '#ff5f56'}}></div>
            <div className={styles.dot} style={{background: '#ffbd2e'}}></div>
            <div className={styles.dot} style={{background: '#27c93f'}}></div>
          </div>
          <div className={styles.urlText}>something-ai.com</div>
        </div>
        <img src="https://assets.aceternity.com/templates/template-preview-2.webp" alt="Preview" style={{width: '100%', display: 'block'}} />
      </div>
    </div>
  );
};