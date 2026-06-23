import { useRef } from 'react';
import { VscFiles } from "react-icons/vsc";
import './HeroSection.Modern.css';
import img1 from '../../assets/avatar/photo1.webp';
import img2 from '../../assets/avatar/photo2.webp';
import img3 from '../../assets/avatar/photo3.webp';
import img4 from '../../assets/avatar/photo4.webp';
import img5 from '../../assets/avatar/photo5.webp';

export default function HeroSection() {
  // تعريف الـ Ref مع تحديد نوعه ليقبل العناصر من نوع div
  const containerRef = useRef<HTMLDivElement>(null);

  // تعريف نوع الحدث e كـ MouseEvent
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = containerRef.current;
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      className="hero-container" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
    >
      <div className="interactive-glow"></div>

      <div className="hero-badge">
        <span className="badge-icon"><VscFiles size={16} /></span>
        <span className="badge-text">Changelog</span>
        <span className="badge-divider">|</span>
        <span className="badge-action">80+ new blocks →</span>
      </div>

      <div className="hero-main-content">
        <div className="hero-left-column">
          <h1 className="hero-headline">
            Ship landing pages <br />
            at lightning speed.
          </h1>
          
          <p className="hero-subheadline">
            200+ production-ready components, blocks and templates that make your site feel 
            like you hired a design team. Copy, paste, customize, no wrestling with Framer 
            Motion animations or Tailwind styling.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary">Browse Components</button>
            <button className="btn-secondary">Get All-Access</button>
          </div>
        </div>

        <div className="hero-right-column">
          <div className="social-proof-container">
            <p className="social-proof-text">
              Trusted by 120,000+ founders <br />
              developers and creators
            </p>
            
            <div className="social-proof-footer">
              <div className="avatar-stack">
                <img src={img1} alt="User 1" className="avatar" />
                <img src={img2} alt="User 2" className="avatar" />
                <img src={img3} alt="User 3" className="avatar" />
                <img src={img4} alt="User 4" className="avatar" />
                <img src={img5} alt="User 5" className="avatar" />
              </div>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}