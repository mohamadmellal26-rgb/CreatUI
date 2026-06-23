import './SocialProofSection.Modern.css';

// يمكنك استبدال هذه المسارات بمسارات الصور الحقيقية لديك
const avatars = [
  "https://ui.aceternity.com/images/testimonials/tony.jpeg", "https://ui.aceternity.com/images/testimonials/ray.png", "https://ui.aceternity.com/images/testimonials/jonathan.jpeg", "https://ui.aceternity.com/images/testimonials/georg.jpeg", 
  "https://ui.aceternity.com/images/testimonials/meru.webp", "https://ui.aceternity.com/images/testimonials/johnferry2.jpeg", "https://ui.aceternity.com/images/testimonials/henrik.jpeg", "https://ui.aceternity.com/images/testimonials/john.jpeg"
];

export default function CtaSection() {
  return (
    <section className="cta-wrapper">
      <div className="cta-header">
        <h1>Get access to all <br /> Component Blocks and templates</h1>
        <p>
          Upgrade to Pro today and unlock our entire library of <br />
          premium components and templates. Build beautiful <br />
          websites faster with copy-paste simplicity.
        </p>
      </div>

      <button className="unlock-btn">Unlock Unlimited Access</button>

      <div className="social-proof-footer">
        <div className="avatars-group">
          {avatars.map((avatar, i) => (
            <img key={i} src={avatar} alt="Founder" className="avatar" />
          ))}
          <span className="stars">★★★★★</span>
        </div>
        <p className="trust-text">Trusted by founders and developers</p>
      </div>
    </section>
  );
}