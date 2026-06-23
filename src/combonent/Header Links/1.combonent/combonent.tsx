import './combonent.Modern.css';
import UpsellCard from '../../MenuSidebar/UpsellCard/UpsellCard';

    export default function Combonent() {
      const PROJECTS = [
  { id: 1, title: "Text Flipping Board", desc: "A split-flap display component that animates characters.", img: "https://assets.aceternity.com/components/text-flipping-board.webp" },
  { id: 2, title: "Macbook Scroll", desc: "Scroll through the page and see the image come out.", img: "https://assets.aceternity.com/macbook-scroll.webp" },
  { id: 3, title: "Interactive Particles", desc: "Performance-focused particle background.", img: "https://assets.aceternity.com/components/notch.webp" },
  { id: 4, title: "Text Flipping Board", desc: "A split-flap display component that animates characters.", img: "https://assets.aceternity.com/pro/shaders.webp" },
  { id: 5, title: "Macbook Scroll", desc: "Scroll through the page and see the image come out.", img: "https://assets.aceternity.com/tooltip-card.webp" },
  { id: 6, title: "Interactive Particles", desc: "Performance-focused particle background.", img: "https://assets.aceternity.com/pro/logo-clouds.png" },
  { id: 4, title: "Text Flipping Board", desc: "A split-flap display component that animates characters.", img: "https://assets.aceternity.com/components/parallax-hero-images-2.webp" },
  { id: 5, title: "Macbook Scroll", desc: "Scroll through the page and see the image come out.", img: "https://assets.aceternity.com/components/squiggly-text.webp" },
  { id: 6, title: "Terminal", desc: "Performance-focused particle background.", img: "https://assets.aceternity.com/components/terminal.webp" },
];
    return (
        <div className='contener-combonent'>
            
            <div className="main-content">
                <div className='combonent-header-wrapper'>
                    <div className='combonent-text'>
                        <h2>Components</h2>
                        <p>Explore the best in class, shadcn compatible components.</p>
                    </div>
                    <div className="tabs-container">
                        <button className="tab-btn active">All</button>
                        <button className="tab-btn">Components</button>
                        <button className="tab-btn">Blocks</button>
                    </div>
                </div>

                <div className='combonent-imgProjct'>
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="card-preview">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="upsell-side">
                <UpsellCard />
            </div>

        </div>
    );
}