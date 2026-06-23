import './UpsellCard.Modern.css';

function UpsellCard() {
    return (
        <div className="upsell-card-container">
            <div className="upsell-content">
                {/* تم إضافة الكلاس هنا */}
                <img 
                    src="https://assets.aceternity.com/cta-demo-dark.webp" 
                    alt="Upsell visual" 
                    className="upsell-image" 
                />
                <h3>Build faster with All-Access</h3>
                <p>
                    Get access to all templates, components and blocks for a one-time payment.
                </p>
                <button className="upsell-btn">
                    Get All-Access
                </button>
                <span className="trusted-text">
                    Trusted by 120,000+ users worldwide
                </span>
            </div>
        </div>
    );
}
export default UpsellCard;