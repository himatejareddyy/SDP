import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import StudentPortal from './StudentPortal';
import TeacherPortal from './TeacherPortal';
import Login from './Login';
import Signup from './Signup';
import './portal.css';

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login and Signup Routes */}
        <Route
          path="/login"
          element={
            <Login
              onLogin={setUser}
              onSignupClick={() => setShowSignup(true)}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              onSignup={setUser}
              onLoginClick={() => setShowSignup(false)}
            />
          }
        />
        <Route
          path="/student/*"
          element={
            user && user.role === 'student'
              ? <StudentPortal user={user} onLogout={() => setUser(null)} />
              : <Navigate to="/login" />
          }
        />
        <Route
          path="/teacher/*"
          element={
            user && user.role === 'teacher'
              ? <TeacherPortal user={user} onLogout={() => setUser(null)} />
              : <Navigate to="/login" />
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}



export default App;