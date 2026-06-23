import { useState } from 'react';
import { LuLayoutTemplate, LuLayoutGrid, LuAppWindow, LuMousePointer } from "react-icons/lu"; // استيراد الأيقونات
import './Features.Modern.css';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('hero');

  const tabsData = {
    hero:     { htmlPath: "/previews/hero.html", label: "Hero Sections", icon: <LuLayoutTemplate size={16} /> },
    features: { htmlPath: "/previews/features.html", label: "Features", icon: <LuAppWindow size={16} /> },
    bento:    { htmlPath: "/previews/bento.html", label: "Bento Grids", icon: <LuLayoutGrid size={16} /> },
    parallax: { htmlPath: "/previews/parallax.html", label: "Parallax Blocks", icon: <LuMousePointer size={16} /> },
  };

  const currentData = tabsData[activeTab as keyof typeof tabsData] || tabsData['hero'];

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget;
    if (iframe.contentWindow && iframe.contentWindow.document.body) {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
  };

  return (
    <section className="features-section-container">
      <div className="window-frame">
        
        {/* شريط علامات التبويب العلوي */}
        <div className="window-tabs-bar">
          <div className="window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          
          <nav className="window-nav">
            {Object.entries(tabsData).map(([key, data]) => (
              <button 
                key={key}
                className={`tab-btn ${activeTab === key ? 'active' : ''}`} 
                onClick={() => setActiveTab(key)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {data.icon} {data.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* منطقة العرض الموحدة */}
        <div className="window-content layout-fullwidth" key={activeTab}>
          <iframe 
            src={currentData.htmlPath} 
            className="feature-html-frame fade-in"
            title="Feature Preview"
            scrolling="no"
            onLoad={handleIframeLoad}
          />
        </div>

      </div>
    </section>
  );
}