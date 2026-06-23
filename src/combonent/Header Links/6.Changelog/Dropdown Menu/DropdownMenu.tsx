import { useState } from 'react';
import { Calendar } from 'lucide-react';
import styles from './DropdownMenu.module.css'; // استيراد كائن الستايلات

const DROPDOWN_ITEMS = [
  { name: "SVG Path Morphing", id: "svg-path" },
  { name: "Gooey Dropdown", id: "gooey-dropdown" },
  { name: "Fey Cards", id: "fey-cards" },
  { name: "Labs", id: "labs" },
  { name: "Notch", id: "notch" },
];

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("svg-path");

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedItem(id);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      {/* استخدام styles.className بدلاً من السلسلة النصية */}
      <button className={styles.dropdownTrigger} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.triggerLeft}>
          <Calendar size={18} />
          <span>2026</span>
        </div>
        <span className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`}>▲</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {DROPDOWN_ITEMS.map((item) => (
            <li 
              key={item.id} 
              className={`${styles.dropdownItem} ${selectedItem === item.id ? styles.activeItem : ''}`}
            >
              <button 
                onClick={() => handleSmoothScroll(item.id)}
                className={styles.linkButton}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}