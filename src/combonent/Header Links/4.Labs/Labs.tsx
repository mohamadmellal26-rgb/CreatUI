import UpsellCard from '../../MenuSidebar/UpsellCard/UpsellCard';
import './Labs.Modern.css';

const LABS_DATA = [
  {
    id: 1,
    title: "SVG Path Morphing",
    desc: "A play/pause button whose two pause bars smoothly morph into a play triangle.",
    img: "https://assets.aceternity.com/labs/svg-path-morphing.webp"
  },
  {
    id: 2,
    title: "Gooey Dropdown",
    desc: "A gooey dropdown where the trigger pill morphs into the menu container.",
    img: "https://assets.aceternity.com/labs/aave-dropdown.webp"
  },
  {
    id: 2,
    title: "Gooey Dropdown",
    desc: "A gooey dropdown where the trigger pill morphs into the menu container.",
    img: "https://assets.aceternity.com/components/fey-cards.webp"
  },
  {
    id: 2,
    title: "Gooey Dropdown",
    desc: "A gooey dropdown where the trigger pill morphs into the menu container.",
    img: "https://assets.aceternity.com/components/interface-craft-cards.webp"
  }
];

export default function Labs() {
  return (
    <div className="labs-container">
      <div className="upsell-side">
                <UpsellCard />
            </div>
      {/* قسم العنوان العلوي للمجلة */}
      <div className='combonent-Labs'>
        <div className='content-text'>
        <h2>Labs</h2>
        <p>A curated collection of the coolest components and playgrounds, complete with editable code and an easy CLI to add them to your projects.</p>
      </div>

      {/* شبكة الكروت الاحترافية */}
      <div className="labs-grid">
        {LABS_DATA.map((item) => (
          <div key={item.id} className="lab-card">
            {/* صندوق المعاينة الأسود الكبير */}
            <div className="preview-box">
              <img src={item.img} alt={item.title} className="lab-webp-img" />
            </div>
            {/* نصوص الكارت */}
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}