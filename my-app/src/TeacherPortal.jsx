import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

// Sidebar links
const links = [
  { label: "Dashboard", href: "/teacher/dashboard" },
  { label: "Assignments", href: "/teacher/assignments" },
  { label: "Submissions", href: "/teacher/submissions" },
  { label: "Analytics", href: "/teacher/analytics" },
  { label: "Messages", href: "/teacher/messages" }
];

// Create Assignment component for teacher
function TeacherAssignments() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [due, setDue] = useState('');
  const [points, setPoints] = useState('');
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Research Paper: Climate Change",
      desc: "Review and grade climate change research papers",
      due: "2024-01-15",
      points: 100
    }
  ]);


  
  // Handle new assignment creation and add to assignments list
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: assignments.length + 1,
      title,
      desc,
      due,
      points
    };
    setAssignments([...assignments, newAssignment]);
    // Clear form and close modal
    setTitle('');
    setDesc('');
    setDue('');
    setPoints('');
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} style={{marginBottom: "1.2rem"}}>+ Create Assignment</button>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Create Assignment</h2>
            <form onSubmit={handleCreateAssignment}>
              <label>Title</label>
              <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
              <label>Description</label>
              <textarea required value={desc} onChange={e => setDesc(e.target.value)} />
              <label>Due Date</label>
              <input type="date" required value={due} onChange={e => setDue(e.target.value)} />
              <label>Points</label>
              <input type="number" min="0" required value={points} onChange={e => setPoints(e.target.value)} />
              <button type="submit">Create</button>
              <button type="button" onClick={() => setShowModal(false)} style={{marginLeft:'1rem'}}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      {/* List all created assignments */}
      <div className="assignment-list" style={{marginTop: '2rem'}}>
        {assignments.map(a => (
          <div className="assignment" key={a.id}>
            <h2>{a.title}</h2>
            <div className="desc">{a.desc}</div>
            <div className="details">
              <span className="due">Due: {a.due}</span>
              <span className="points">{a.points} points</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Main TeacherPortal, showing sidebar and different router views
function TeacherPortal({ user, onLogout }) {
  return (
    <>
      <Header
        name={user?.name || "Teacher"}
        email={user?.email}
        avatar={user?.name?.substring(0,3).toUpperCase() || "TC"}
        onLogout={onLogout}
      />
      <main>
        <Sidebar links={links} />
        <section className="content">
          <Routes>
            <Route path="dashboard" element={
              <div>
                <h1>Dashboard</h1>
                <div className="teacher-stats">
                  <div className="stat-card">Total Assignments<br/><span className="stat-value">12</span></div>
                  <div className="stat-card">Pending Submissions<br/><span className="stat-value">8</span></div>
                  <div className="stat-card">Graded<br/><span className="stat-value">45</span></div>
                  <div className="stat-card">Overdue<br/><span className="stat-value">3</span></div>
                </div>
              </div>
            } />
            {/* --- CREATE & LIST ASSIGNMENTS --- */}
            <Route path="assignments" element={<TeacherAssignments />} />
            <Route path="submissions" element={
              <div>
                <h1>Submissions</h1>
                <p>View and grade student submissions.</p>
              </div>
            } />
            <Route path="analytics" element={
              <div>
                <h1>Analytics</h1>
                <p>Class performance, grade trends, etc.</p>
              </div>
            } />
            <Route path="messages" element={
              <div>
                <h1>Messages</h1>
                <p>Teacher-student messaging will appear here.</p>
              </div>
            } />
            <Route path="/" element={<Navigate to="dashboard" />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default TeacherPortal;