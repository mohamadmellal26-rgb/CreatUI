import { TwitterTweetEmbed } from 'react-twitter-embed';
import './TestimonialsSection.Modern.css';

const tweetIds = ["1739684061155606570", "1737078846921314782", "1826598193574150276", "1827286003519758773", ];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-container">
      <h2 className="title">Loved by thousands</h2>
      <div className="testimonials-grid">
        {tweetIds.map((id) => (
          <div key={id} className="testimonial-card">
            <TwitterTweetEmbed 
              tweetId={id} 
              options={{ conversation: 'none', cards: 'hidden' }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}