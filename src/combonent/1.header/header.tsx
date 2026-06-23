import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart, LuMoon, LuSun } from "react-icons/lu";
import Search from './Search/Search';
import ShoppingCart from './Shopping Cart/ShoppingCart';
import './header.Modern.css';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('username');
      setIsLoggedIn(!!user);
    };
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const navLinks = [
    { name: "Components", path: "/Combonent" },
    { name: "Blocks", path: "/blocks" },
    { name: "Templates", path: "/templates" },
    { name: "Labs", path: "/labs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Changelog", path: "/changelog" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
          <Link to="/" className="logo">
            <span className="logo-text">Creative <span className="logo-highlight">UI</span></span>
          </Link>
          <nav className="main-nav">
            <ul>
              {navLinks.map(link => (
                <li key={link.path}><a href={link.path}>{link.name}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <div className="search-bar" onClick={() => setIsSearchOpen(true)}>
            <IoSearchOutline size={20} color="#666" />
            <span className="placeholder-text">Search...</span>
            <span className="search-shortcut">⌘ K</span>
          </div>

          <button className="icon-btn" onClick={() => setIsCartOpen(true)}><LuShoppingCart size={20} /></button>
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'light' ? <LuMoon size={20} /> : <LuSun size={20} />}
          </button>
          
          <div className="divider"></div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="login-link">Logout</button>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
          <button className="cta-button">Get All-Access</button>
        </div>
      </header>

      {/* القائمة الجانبية (Mobile Menu) */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <a href={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {isSearchOpen && (
        <div className="search-overlay" onClick={(e) => e.target === e.currentTarget && setIsSearchOpen(false)}>
          <Search onClose={() => setIsSearchOpen(false)} />
        </div>
      )}

      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}><ShoppingCart /></div>
        </div>
      )}
    </>
  );
}