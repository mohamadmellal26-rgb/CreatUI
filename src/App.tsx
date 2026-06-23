import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// المكونات الأساسية
import Header from './combonent/1.header/header';
import Footer from './combonent/12.footer/footer';

// الصفحات والمكونات
import HeroSection from './combonent/2.HeroSection/HeroSection';
import Features from './combonent/3.Features/Features';
import BentoGrid from './combonent/4.Dashboard/Dashboard';
import BentoLayout from './combonent/5.GlobalGrid/BentoLayout';
import TestimonialsSection from './combonent/6.TestimonialsSection/TestimonialsSection';
import UIAllAccessPass from './combonent/7.UI AllAccessPass/UI AllAccessPass';
import UIKit from './combonent/8.UIKit/UIKit';
import FeaturedReviewSection from './combonent/9.FeaturedReviewSection/FeaturedReviewSection';
import FAQSection from './combonent/10.FAQSection/FAQSection';
import SocialProofSection from './combonent/11.SocialProofSection/SocialProofSection';

// مسارات Auth
import LoginModal from './combonent/1.header/LoginModal/LoginModal';
import SingIn from './combonent/1.header/SingIn/SingIn';

import Combonent from './combonent/Header Links/1.combonent/combonent';
import Blocks from './combonent/Header Links/2.Blocks/Blocks';
import Templates from './combonent/Header Links/3.Templates/Templates';
import Labs from './combonent/Header Links/4.Labs/Labs';
import Pricing from './combonent/Header Links/5.Pricing/Pricing';
import Changelog from './combonent/Header Links/6.Changelog/Changelog';

// صفحة التفاصيل الديناميكية
import ComponentDetailsPage from './combonent/MenuSidebar/ComponentDetailsPage';
// تغير الثيم و لون من اصباحي الى اليلي
import { ThemeProvider } from './context/ThemeContext';
// مكتبة تسريع TanStack Query


function App() {
  return (
    <ThemeProvider>
      
    <BrowserRouter>
      {/* الـ Header ثابت في الأعلى */}
      <Header /> 

      {/* الـ Wrapper يغلف الصفحات لتوحيد التنسيق */}
      <main className="app-main-wrapper">
        <Routes>
          {/* الصفحة الرئيسية تحتوي على جميع المقاطع */}
          <Route path="/" element={
            <div className="app-contener">
              <HeroSection />
              <Features />
              <BentoGrid />
              <BentoLayout />
              <TestimonialsSection />
              <UIAllAccessPass />
              <UIKit />
              <FeaturedReviewSection />
              <FAQSection />
              <SocialProofSection />
            </div>
          } />

          {/* مسارات تسجيل الدخول */}
          <Route path="/login" element={<LoginModal />} />
          <Route path='/SingIn' element={<SingIn />} />
          <Route path='/combonent' element={<Combonent />} />
          <Route path='/Blocks' element={<Blocks />} />
          <Route path='/Templates' element={<Templates />} />
          <Route path='/Labs' element={<Labs />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Changelog' element={<Changelog />} />

          {/* المسار الديناميكي لتفاصيل الكارد */}
          <Route path='/component-details/:id' element={<ComponentDetailsPage />} />
        </Routes>
      </main>

      {/* الـ Footer ثابت في الأسفل */}
      <Footer /> 
    </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;