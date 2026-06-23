import './FeaturedReviewSection.Modern.css';

const reviews = [
  { 
    name: "Adrian Twarog", 
    text: "talks about Aceternity UI performance and usage.", 
    color: "linear-gradient(180deg, #ef4444, #ec8b8b)", 
    videoId: "FUSltzcAcwU" 
  },
  { 
    name: "Hitesh Choudhary", 
    text: "builds an entire website from scratch with Aceternity UI.", 
    color: "linear-gradient(180deg, #3b82f6, #93c5fd)", 
    videoId: "RPa3_AD1_Vs" 
  },
  { 
    name: "Web Dev Simplified", 
    text: "showcases 37+ interactive React components.", 
    color: "linear-gradient(180deg, #e11d48, #fb7185)", 
    videoId: "IYLV26d0dOc" 
  },
  { 
    name: "New Discovery", 
    text: "explores why this UI library is 'kinda sick' and unique.", 
    color: "linear-gradient(180deg, #f59e0b, #fcd34d)", 
    videoId: "e_QcQ6A8fNw" 
  }
];

export default function FeaturedReviewSection() {
  return (
    <section className="featured-section">
      <div className="header-box">
        <h2>Featured by popular YouTubers</h2>
        <p>See what the best YouTubers are saying about Aceternity UI.</p>
      </div>
      
      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <div key={i} className="review-card" style={{ background: review.color }}>
             <div className="video-thumb">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${review.videoId}`} 
                  title={review.name}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             </div>
             
             <div className="review-content">
                <p>
                  Watch 
                  <span>
                    {review.name}
                  </span> 
                  {review.text}
                </p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}