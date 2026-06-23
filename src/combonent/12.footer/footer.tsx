import './footer.Modern.css';

export default function Footer() {
  const footerSections = [
    {
      title: "Components",
      links: ["3D Card Effect", "3D Pin", "Animated Tooltip", "Aurora Background", "Background Beams", "Bento Grid", "Card Hover Effect", "Floating Dock", "Globe", "Hero Parallax"]
    },
    {
      title: "Shadcn Compatible Blocks",
      links: ["Hero Sections", "Logo Clouds", "Bento Grids", "CTA Sections", "Testimonials", "Team Sections", "Empty States", "Feature Sections", "Pricing Sections", "Cards"]
    },
    {
      title: "Templates",
      links: ["Agenforce Marketing Template", "Nodus Marketing Template", "Startup Landing Page Template", "AI SaaS Template", "Proactiv Marketing Template", "Agenlabs Agency Template", "DevPro Portfolio Template", "Foxtrot Marketing Template", "Playful Marketing Template", "Cryptgen Marketing Template"]
    },
    {
      title: "Pages",
      links: ["Explore", "Components", "Templates", "Labs", "Blocks", "Showcase", "Blog", "Installation", "Affiliate Program", "Categories"]
    },
    {
      title: "Relevant",
      links: ["Best Modern Design Templates", "Best AI SaaS Templates", "Best Marketing Templates", "Best Minimal Templates in React and Next.js", "Best components and templates with Framer Motion", "Amazing Tailwind CSS and Framer Motion Components", "Best Shadcn Blocks and templates"]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}