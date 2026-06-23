import React from 'react';
import styles from './HeroSection6.module.css';

export const HeroSection6: React.FC = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    "https://ui.aceternity.com/images/testimonials/tony.jpeg",
    "https://ui.aceternity.com/images/testimonials/henrik.jpeg",
    "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
  ];

  return (
    <div className={styles.heroWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>DevStudio</div>
        <nav>
          <ul className={styles.navMenu}>
            {['Work', 'Services', 'Pricing', 'Contact'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>
        <a href="#" className={styles.btnBook}>Book a call</a>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.avatarGroup}>
          {avatars.map((src, i) => (
            <img key={i} src={src} alt="Avatar" className={styles.avatarImg} />
          ))}
        </div>

        <h2 className={styles.title}>Your best in class</h2>
        <span className={styles.highlight}>design and development studio</span>
        
        <p className={styles.description}>
          We provide the best in class design and development services for teams that ship with the speed of light.
        </p>

        <button className={styles.btnLarge}>Book a call</button>

        <div className={styles.trustedBy}>Trusted by famous brands</div>
        <div className={styles.brandLogos}>
          <img src="https://assets.aceternity.com/pro/logos/aceternity-ui.png" alt="Brand" className={styles.brandLogo} />
          <img src="https://assets.aceternity.com/pro/logos/gamity.png" alt="Brand" className={styles.brandLogo} />
          <img src="https://assets.aceternity.com/pro/logos/hostit.png" alt="Brand" className={styles.brandLogo} />
        </div>
      </main>
    </div>
  );
};