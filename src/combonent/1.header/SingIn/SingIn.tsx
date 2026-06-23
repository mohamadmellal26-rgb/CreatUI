import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../LoginModal/LoginModal.css';

export default function SingIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        // 1. تسجيل الدخول تلقائياً بعد نجاح التسجيل
        localStorage.setItem('username', formData.username);
        
        // 2. إرسال الإشارة للـ Header ليحدث حالته فوراً
        window.dispatchEvent(new Event('storage')); 
        
        alert('تم إنشاء الحساب وتسجيل دخولك بنجاح!');
        navigate('/'); // الانتقال للرئيسية مباشرة
      } else {
        alert('خطأ: ' + (data.error || 'فشل إنشاء الحساب'));
      }
    } catch (err) {
      alert('لا يمكن الاتصال بالخادم. تأكد من تشغيل سيرفر Go.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo-box">
          <div className="logo-icon">A</div>
        </div>
        <h1>Create Account</h1>
        <p className="subtitle">Sign up for your Creative UI account</p>

        <form className="login-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" onChange={e => setFormData({...formData, username: e.target.value})} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
  type="password" 
  id="password"
  required 
  // هذا النمط يفرض: حرف كبير، رقم، رمز خاص، وطول 8
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
  title="يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، تشمل حرفاً كبيراً، رقماً، ورمزاً خاصاً."
  onChange={e => setFormData({...formData, password: e.target.value})} 
/>
          </div>
          <button type='button'>
            Google
          </button>
          <button type="submit" className="btn-primary">Sign Up</button>
          
          <div className="auth-footer" style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Already have an account? <Link to="/login" style={{ color: '#000', fontWeight: 'bold' }}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}