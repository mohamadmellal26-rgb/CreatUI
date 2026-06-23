import './UIKit.Modern.css';

const templateData = {
  title: "Simplistic SaaS Template",
  desc: "A SaaS template designed for AI and Agentic startups, features bento grids with rich illustrations and microinteractions.",
  buttons: { preview: "Live Preview", buy: "Buy now" },
  price: { current: "$79", original: "$99" },
  features: [
    {
      title: "Deploy AI agents that work while you sleep.",
      desc: "Build, deploy, and orchestrate intelligent AI agents that automate complex workflows, make decisions, and execute tasks autonomously.",
      image: "https://assets.aceternity.com/templates/simplistic-saas-template-1.webp" 
    },
    {
      title: "Autonomous AI workflow features",
      desc: "Seamlessly integrate your existing tools with our workflow builder.",
      image: "https://assets.aceternity.com/templates/productized-agency-4.webp"
    },
    {
      title: "Deploy agents across every platform",
      desc: "All AI agents work seamlessly on mobile, desktop, and tablet. Monitor and orchestrate from anywhere.",
      image: "https://assets.aceternity.com/templates/productized-agency-2.webp"
    }
  ]
};

export default function TemplateShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-header">
        <div className="header-text">
          <h2>{templateData.title}</h2>
          <p>{templateData.desc}</p>
        </div>
        <div className="header-actions">
          <button className="btn-preview">{templateData.buttons.preview}</button>
          <div className="btn-buy">
            <button>
            <span>{templateData.buttons.buy} {templateData.price.current}</span>
            <span className="price-old">{templateData.price.original}</span>
          </button>
          </div>
        </div>
      </div>

      <div className="showcase-grid">
        {templateData.features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="card-image-wrapper">
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}