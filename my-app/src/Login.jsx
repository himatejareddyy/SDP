import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, onSignupClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, role, name: email.split('@')[0] });
    if (role === "student") {
      navigate('/student/assignments');
    } else {
      navigate('/teacher/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <label>Email</label>
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        <div style={{ margin: '1rem 0' }}>
          <label>
            <input type="radio" value="student" checked={role === 'student'} onChange={() => setRole('student')} /> Student
          </label>
          <label style={{ marginLeft: '2rem' }}>
            <input type="radio" value="teacher" checked={role === 'teacher'} onChange={() => setRole('teacher')} /> Teacher
          </label>
        </div>
        <button type="submit">Login</button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Don't have an account?{' '}
          <span className="link" onClick={onSignupClick} style={{ color: '#4267b2', cursor: 'pointer', textDecoration: 'underline' }}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}



export default Login;