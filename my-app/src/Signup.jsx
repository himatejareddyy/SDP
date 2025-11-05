import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ name, email, role });
    // Redirect after signup
    if (role === 'student') {
      navigate('/student/assignments');
    } else {
      navigate('/teacher/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Full Name</label>
        <input type="text" required value={name} onChange={e => setName(e.target.value)} />
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
        <button type="submit">Sign Up</button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Already have an account?{' '}
          <span className="link" onClick={() => navigate('/login')} style={{ color: '#4267b2', cursor: 'pointer', textDecoration: 'underline' }}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;