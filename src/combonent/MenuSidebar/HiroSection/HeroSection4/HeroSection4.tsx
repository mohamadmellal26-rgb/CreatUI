import styles from './HeroSection4.module.css';

export const HeroSection4: React.FC = () => {
  return (
        <section className={styles.rightSection}>
          <p className={styles.trustText}>
            Trusted by 120,000+ founders<br />developers and creators
          </p>
          
          <div className={styles.avatarGroup}>
            <div className={styles.avatars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i}
                  className={styles.avatarImg} 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1539571696357-5a69c17a67c6' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1500648767791-00dcc994a43e' : i === 4 ? '1507003211169-0a1dd7228f2d' : '1534528741775-53994a69daeb'}?auto=format&fit=crop&w=100&q=80`}
                  alt={`User ${i}`}
                  loading="lazy"
                />
              ))}
            </div>
            
            <div className={styles.stars}>
              <span>★★★★★</span>
            </div>
          </div>
        </section>
  );
};