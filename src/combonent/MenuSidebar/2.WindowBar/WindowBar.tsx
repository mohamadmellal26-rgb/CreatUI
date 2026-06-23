import './WindowBar.Modern.css';

export default function WindowBar({ 
    url = "Creative UI.com", 
    imageUrl = "https://assets.aceternity.com/screenshots/3.jpg" 
}) {
    return (
        <div className="browser-frame">
            {/* الشريط العلوي */}
            <div className="window-bar">
                <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="window-url">{url}</div>
            </div>
            
            {/* الصورة */}
            <div className="content-area">
                <img src={imageUrl} alt="Project Preview" />
            </div>
        </div>
    );
}