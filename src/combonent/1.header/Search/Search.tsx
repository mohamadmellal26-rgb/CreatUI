import { useEffect } from 'react';
// استبدل التصدير المغلف بتصدير عادي
import { IoSearchOutline } from "react-icons/io5";
import { LuX } from "react-icons/lu";
import './Search.Modern.css';

interface SearchProps {
  onClose: () => void;
}

export default function Search({ onClose }: SearchProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="search-modal" onClick={(e) => e.stopPropagation()}>
      <div className="search-input-wrapper">
        <IoSearchOutline className="icon" />
        <input type="text" placeholder="Type a command..." autoFocus />
        <button type="button" className="close-btn" onClick={onClose}>
          <LuX />
        </button>
      </div>
      <div className="search-section">
        <h3 className="section-title">Installation</h3>
        <div className="search-item">○ Install Next.js</div>
      </div>
    </div>
  );
}