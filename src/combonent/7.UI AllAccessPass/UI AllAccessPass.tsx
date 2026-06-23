import { useNavigate } from 'react-router-dom';
import './UI AllAccessPass.Modern.css';

// 1. تعريف واجهة لنوع الصورة
interface ImageModule {
  default: string;
}

// 2. تعريف واجهة لبيانات الكارد
interface CardData {
  id: number;
  fileName: string;
  title: string;
  blocks: string;
  desc: string;
}

const images = import.meta.glob<ImageModule>('../../assets/UIAllAccessPassImg/*.{webp,png}', { eager: true });

const cardData: CardData[] = [
  { id: 1, fileName: 'hero-section-with-mousemove.webp', title: 'Hero Sections', blocks: '21+ blocks', desc: 'A collection of hero sections that are modern and stand out.' },
  { id: 2, fileName: 'shaders.webp', title: 'Shaders', blocks: '3+ blocks', desc: 'A collection of reusable shaders for your backgrounds.' },
  { id: 3, fileName: 'logo-clouds.webp', title: 'Logo Clouds', blocks: '6+ blocks', desc: 'A collection of logo clouds with micro interactions.' },
  { id: 4, fileName: 'features-section-with-skeletons.webp', title: 'Features Section', blocks: '21+ blocks', desc: 'Modern feature sections with skeleton loaders.'},
  { id: 5, fileName: 'backgrounds.webp', title: 'Backgrounds', blocks: '3+ blocks', desc: 'A collection of reusable shaders for your backgrounds.' },
  { id: 6, fileName: 'bento-grids.webp', title: 'Bento Grids', blocks: '6+ blocks', desc: 'A collection of modern Bento-style grid layouts.' },
];

export default function UIAllAccessPass() {
  const navigate = useNavigate();

  // 3. تحديد نوع الـ card كـ CardData
  const handleCardClick = (card: CardData) => {
    navigate(`/component-details/${card.id}`, { state: { card } });
  };

  return (
    <section className="ui-access-container">
      <div className='card-grid'>
        {cardData.map((card) => {
          const imagePath = `../../assets/UIAllAccessPassImg/${card.fileName}`;
          const imageModule = images[imagePath];
          const src = imageModule?.default;
          
          return (
            <div 
              key={card.id} 
              className="card" 
              onClick={() => handleCardClick(card)} 
              style={{ cursor: 'pointer' }}
            >
              {src && <img src={src} alt={card.title} loading="lazy" />}
              <div className="card-info">
                <h3>{card.title}</h3>
                <span>{card.blocks}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}