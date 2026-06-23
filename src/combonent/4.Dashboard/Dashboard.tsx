import './Dashboard.Modern.css';

// 1. تعريف واجهة (Interface) بسيطة لنوع الصور المستوردة
interface ImageModule {
  default: string;
}

// 2. استيراد الصور مع تحديد النوع
const images = import.meta.glob<ImageModule>('../../assets/DashboardImg/*.webp', { eager: true });

const companies = [
  { name: 'Google', fileName: 'google.webp' },
  { name: 'Microsoft', fileName: 'microsoft.webp' },
  { name: 'Cisco', fileName: 'cisco.webp' },
  { name: 'Zomato', fileName: 'zomato.webp' },
  { name: 'Better-Auth', fileName: 'better-auth.webp' },
  { name: 'GreatFrontend', fileName: 'greatfrontend.webp' },
  { name: 'Strapi', fileName: 'strapi.webp' },
  { name: 'Neon', fileName: 'neon.webp' },
  { name: 'Workbase', fileName: 'workbase.webp' },
  { name: 'Dovly', fileName: 'dovly.webp' },
  { name: 'Nixtla', fileName: 'nixtla.webp' },
  { name: 'Pixai', fileName: 'pixai.webp' },
  { name: 'Writesonic', fileName: 'writesonic.webp' },
  { name: 'Harvard', fileName: 'harvard.webp' },
  { name: 'Bath', fileName: 'bath.webp' },
  { name: 'NYU', fileName: 'nyu.webp' }
];

function CompaniesSection() {
  return (
    <section className="companies-section">
      <h4 className="companies-title">Used by companies and people working at</h4>
      
      <div className="logos-grid">
        {companies.map((company, index) => {
          // 3. الوصول المباشر للمسار بعد تعريف النوع
          const imageModule = images[`../../assets/DashboardImg/${company.fileName}`];
          const src = imageModule?.default;
          
          return (
            <div 
              key={index} 
              className={`logo-item ${['Harvard', 'Better-Auth', 'Strapi', 'Neon'].includes(company.name) ? 'invert-logo' : ''}`}
            >
              {src && <img src={src} alt={company.name} loading="lazy" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CompaniesSection;