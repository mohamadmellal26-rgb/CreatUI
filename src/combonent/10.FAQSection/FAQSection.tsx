import { useState } from 'react';
import './FAQSection.Modern.css';

const faqData = [
  { question: "What does lifetime access include?", answer: "Lifetime access includes all future updates, new components, and unlimited project usage." },
  { question: "How does the purchase and access flow work?", answer: "Once you purchase, you will receive instant access to the repository and documentation." },
  { question: "How do I get the code?", answer: "You can clone the repository directly from your dashboard after verification." }
];

export default function FAQSection() {
  // التصحيح: تحديد النوع صراحةً ليكون إما رقم أو null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently asked questions</h2>
      <p>Pay once, build better websites faster. If you don't find what you need here, reach us at <a>support@aceternity.com</a></p>
      
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleAccordion(index)}>
              {item.question}
              <span className="icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}