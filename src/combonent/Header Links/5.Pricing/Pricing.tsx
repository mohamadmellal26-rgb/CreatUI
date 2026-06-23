import './Pricing.Modern.css';

const PRICING_DATA = [
  {
    id: 1,
    title: "Free",
    desc: "Access to all free components",
    price: 0,
    oldPrice: 0,
    btnText: "Browse free components",
    isPopular: false,
    features: [
      "Access to all free components",
      "Copy and paste, no complexity",
      "Built with Next.js, React, Tailwind CSS & Framer Motion",
      "Fully responsive and customizable",
      "Documentation and examples included"
    ]
  },
  {
    id: 2,
    title: "Annual Access",
    desc: "Paid yearly",
    price: 169,
    oldPrice: 249,
    btnText: "Get Annual Access",
    isPopular: false,
    features: [
      "Access to 200+ premium Component Blocks",
      "Access to 12+ ready-to-use Templates",
      "1 year of updates and new features",
      "AI-ready prompts for Lovable, V0 and more"
    ]
  },
  {
    id: 3,
    title: "Lifetime Access",
    desc: "One-time Purchase",
    price: 199,
    oldPrice: 299,
    btnText: "Get Lifetime Access",
    isPopular: true, // لتمييز الكارت الداكن
    features: [
      "Access to 200+ premium Blocks",
      "Access to 12+ ready-to-use Templates",
      "Lifetime updates for all content",
      "Access to all future releases",
      "Private Discord community access"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Get instant access to all blocks and templates</h2>
        <p>For a one-time payment, you get access to all components and templates, including future updates and new templates.</p>
      </div>

      <div className="pricing-grid">
        {PRICING_DATA.map((card) => (
          <div key={card.id} className={`pricing-card ${card.isPopular ? 'dark-card' : ''}`}>
            
            <div className="card-top">
              <div className="title-area">
                <h3>{card.title}</h3>
                {card.isPopular && <span className="popular-badge">Most popular</span>}
              </div>
              <p className="card-desc">{card.desc}</p>
              
              <div className="price-area">
                <span className="currency">$</span>
                <span className="price-amount">{card.price}</span>
                {card.oldPrice > 0 && <span className="old-price">${card.oldPrice}</span>}
              </div>

              <a href='https://www.paypal.com/fr/home?locale.x=fr_EN' className="pricing-btn">{card.btnText}</a>
            </div>

            <hr className="card-divider" />

            <ul className="features-list">
              {card.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="check-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}