import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginModal.css';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        localStorage.setItem('username', credentials.username);
        
        // إرسال الإشارة للـ Header ليحدث حالته
        window.dispatchEvent(new Event('storage')); 
        
        alert('تم تسجيل الدخول بنجاح!');
        navigate('/'); 
      } else {
        alert('فشل تسجيل الدخول: اسم المستخدم أو كلمة المرور غير صحيحة');
      }
    } catch (err) {
      alert('لا يمكن الاتصال بالخادم. تأكد من تشغيل سيرفر Go.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* صندوق الشعار */}
        <div className="logo-box">
          <div className="logo-icon">A</div>
        </div>
        
        <h1>Login</h1>
        <p className="subtitle">Login to your Creative UI account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              placeholder="admin"
              onChange={e => setCredentials({...credentials, username: e.target.value})} 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="1234"
              onChange={e => setCredentials({...credentials, password: e.target.value})} 
              required 
            />
          </div>
          
          <button type="submit" className="btn-primary">LogIn</button>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/SingIn">Create account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}