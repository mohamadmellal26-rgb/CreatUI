import './TemplatesCard.css';

const TEMPLATES = [
  {
    id: 1,
    title: "Productized Agency",
    desc: "Modern template for productized agencies to showcase services and pricing.",
    price: 79,
    oldPrice: 99,
    images: [
      "https://assets.aceternity.com/templates/productized-agency-1.webp",
      "https://assets.aceternity.com/templates/productized-agency-2.webp",
      "https://assets.aceternity.com/templates/productized-agency-3.webp"
    ]
  },
  {
    id: 2,
    title: "Simplistic SaaS Template",
    desc: "A SaaS template designed for AI and Agentic startups, features bento grids with rich illustrations and microinteractions.",
    price: 79,
    oldPrice: 99,
    images: [
      "https://assets.aceternity.com/templates/playful-min.webp",
      "https://assets.aceternity.com/templates/playful-2-min.webp",
      "https://assets.aceternity.com/templates/playful-3-min.webp"
    ]
  },
  {
    id: 4,
    title: "Agenforce Marketing Template",
    desc: "A marketing template designed for various use cases, including AI Agents, Agency, Chatbots and SaaS. Includes delightful micro-interactions and animations.",
    price: 79,
    oldPrice: 99,
    images: [
      "https://assets.aceternity.com/templates/startup-1.webp",
      "https://assets.aceternity.com/templates/startup-2.webp",
      "https://assets.aceternity.com/templates/startup-3.webp"
    ]
  },
  {
    id: 5,
    title: "Minimal Portfolio Template",
    desc: "An elegant, feature rich portfolio website template with a minimalistic center design along with tasteful microinteractions.",
    price: 59,
    // بدون oldPrice في هذا القالب
    images: [
      "https://assets.aceternity.com/pro/minimal-1-min.webp",
      "https://assets.aceternity.com/pro/minimal-2-min.webp",
      "https://assets.aceternity.com/pro/minimal-3-min.webp"
    ]
  },
  {
    id: 6,
    title: "AI SaaS Template",
    desc: "Every AI SaaS template is a multi-page template focused on AI applications offering SaaS solutions.",
    price: 49,
    // لا يوجد oldPrice كما في القالب الأخير
    images: [
      "https://assets.aceternity.com/templates/ai-saas-1.webp",
      "https://assets.aceternity.com/templates/ai-saas-2.webp",
      "https://assets.aceternity.com/templates/ai-saas-3.webp"
    ]
  },
  {
    id: 7,
    title: "Cryptgen Marketing Template",
    desc: "A single page, modern and responsive template with a bento grid, testimonials, features, and a call to action.",
    price: 49,
    images: [
      "https://assets.aceternity.com/templates/cryptgen-1.webp",
      "https://assets.aceternity.com/templates/cryptgen-2.webp",
      "https://assets.aceternity.com/templates/cryptgen-3.webp"
    ]
  }
];

export default function TemplatesCard() {
  return (
    <div className="templates-grid">
      {TEMPLATES.map((tpl) => (
        <div key={tpl.id} className="card-wrapper">
          <div className="card-top">
            <div>
            <h2 className="card-title">{tpl.title}</h2>
             <p className="card-desc">{tpl.desc}</p>
            </div>
            <div className='content-button'>
            <button className="btn-preview">Live Preview</button>
            <div className='contener-btn-buy'>
    <button className="btn-buy">Buy now ${tpl.price}</button>
</div>
            </div>
          </div>
          {/* معرض الصور الثلاث */}
          <div className="gallery-container">
            {tpl.images.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`${tpl.title} ${index}`} className="gallery-img" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}