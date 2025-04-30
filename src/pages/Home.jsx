import React from 'react';
import DepartmentCard from '../components/DepartmentCard';
import '../App.css';

const departments = [
  { id: 'cs', name: 'Computer Science', desc: 'Explore programming, AI, and modern software development.' },
  { id: 'ee', name: 'Electrical Engineering', desc: 'Learn about circuits, power systems, and electronics.' },
  { id: 'ba', name: 'Business Administration', desc: 'Gain insights into management, marketing, and strategy.' },
  { id: 'se', name: 'Software Engineering', desc: 'Master system design, agile methods, and quality assurance.' },
  { id: 'ds', name: 'Data Science', desc: 'Analyze data, build models, and extract valuable insights.' },
];

function Home() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="sidebar-title">Student Portal</h2>
        <nav className="sidebar-nav">
          <a href="/">🏠 Home</a>
          <a href="/applications">📋 Applications</a>
          <a href="#">📈 Dashboard</a>
        </nav>
      </aside>

      <main className="main-content">
        <h1 className="main-title">Open Departments for Admission</h1>
        <div className="card-grid">
          {departments.map(dept => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
