import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import AssignmentList from './AssignmentList';

const links = [
  { label: "Assignments", href: "/student/assignments" },
  { label: "Grades & Feedback", href: "/student/grades" },
  { label: "Progress", href: "/student/progress" },
  { label: "Messages", href: "/student/messages" }
];

// Example student assignments array
const assignments = [
  {
    id: 1,
    title: "Research Paper: Climate Change",
    desc: "Write a 5-page research paper on climate change impacts",
    due: "Due: 1/15/2024 11:59 PM (2 days left)",
    points: 100
  },
  {
    id: 2,
    title: "Science Lab Report",
    desc: "Document your chemistry lab experiments",
    due: "Due: 1/20/2024 11:59 PM (7 days left)",
    points: 80
  },
  {
    id: 3,
    title: "Mathematical Analysis Project",
    desc: "Complete the calculus problem set and show all work",
    due: "Due: 1/12/2024 11:59 PM (1 day overdue)",
    points: 50,
    status: "submitted"
  },
  {
    id: 4,
    title: "History Essay: World War II",
    desc: "Analyze the causes and effects of World War II",
    due: "Due: 1/10/2024 11:59 PM (3 days overdue)",
    points: 75,
    status: "graded",
    grade: "92 / 75"
  }
];

function StudentPortal({ user, onLogout }) {
  return (
    <>
      <Header
        name={user.name || "Student"}
        email={user.email}
        avatar={user.name?.substring(0,2).toUpperCase() || "ST"}
        onLogout={onLogout}
      />
      <main>
        <Sidebar links={links} active="" />
        <section className="content">
          <Routes>
            <Route path="assignments" element={<AssignmentList assignments={assignments} />} />
            <Route path="grades" element={
              <div>
                <h1>Grades & Feedback</h1>
                <p>This is the grades and feedback section.</p>
              </div>
            } />
            <Route path="progress" element={
              <div>
                <h1>Progress</h1>
                <p>This is the progress section.</p>
              </div>
            } />
            <Route path="messages" element={
              <div>
                <h1>Messages</h1>
                <p>This is the messages section.</p>
              </div>
            } />
            <Route path="/" element={<Navigate to="assignments" />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default StudentPortal;
