import './BentoLayout.Modern.css';

function BentoLayout() {
  return (
    <div className="layout-wrapper">
      <div className="grid-bg"></div>
      
      <main className="content-wrapper">
        <div className="hero-text">
          <h1>Idea to website in hours, <span className="highlight">not days.</span></h1>
          <p>As easy as copy-pasting. Build great looking websites without worrying about styling.</p>
        </div>

        <div className="bento-grid">
          {/* الكارد الصغير */}
          <div className='card-right'>
            <img src="https://assets.aceternity.com/pro/landing/6.webp" alt="Feature" />
          </div>
          
          {/* الكارد الطويل */}
          <div className="card tall">
            <img src="https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp" className='img-erthe' alt="Gradient" />
           
            <img src="https://assets.aceternity.com/pro/landing/9.webp" alt="Feature" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BentoLayout;