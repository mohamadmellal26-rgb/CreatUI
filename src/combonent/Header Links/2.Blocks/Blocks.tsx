import './Blocks.Modern.css';
import UpsellCard from '../../MenuSidebar/UpsellCard/UpsellCard';
export default function Blocks() {
    const PROJECTS = [
  { id: 1, title: "Hero Sections", desc: "Interactive hero sections with mousemove effects.", img: "https://assets.aceternity.com/components/hero-section-with-mousemove.webp" },
  { id: 2, title: "Shaders", desc: "Advanced creative shader visual effects.", img: "https://assets.aceternity.com/pro/shaders.webp" },
  { id: 3, title: "Logo Clouds", desc: "Dynamic logo cloud displays.", img: "https://assets.aceternity.com/pro/logo-clouds.png" },
  { id: 4, title: "Feature Skeletons", desc: "Feature section with loading skeleton states.", img: "https://assets.aceternity.com/components/features-section-with-skeletons.webp" },
  { id: 5, title: "Backgrounds", desc: "High-performance creative background assets.", img: "https://assets.aceternity.com/pro/backgrounds.webp" },
  { id: 6, title: "Bento Grids", desc: "Modern card-based layout components.", img: "https://assets.aceternity.com/pro/bento-grids.png" },
  { id: 7, title: "Blog Sections", desc: "Beautifully designed blog post layouts.", img: "https://assets.aceternity.com/pro/blog-sections.png" },
  { id: 8, title: "Call to Actions", desc: "Engaging call-to-action components.", img: "https://assets.aceternity.com/pro/call-to-actions.png" },
  { id: 9, title: "Empty States", desc: "Friendly empty state components.", img: "https://assets.aceternity.com/components/empty-states-thumbnail.webp" },
];
    return(
        <div className='contener-Blocks'>
            
            <div className="main-content">
                <div className='Blocks-header-wrapper'>
                    <div className='Blocks-text'>
                        <h2>Blocks</h2>
                        <p>Clean, minimal shadcn compatible blocks that actually look good. Built for developers who care about design.</p>
                    </div>
                </div>

                <div className='Blocks-imgProjct'>
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