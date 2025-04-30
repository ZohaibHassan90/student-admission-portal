import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentDetail from './pages/DepartmentDetail';
import Applications from './pages/Applications';

function App() {
  const [applications, setApplications] = useState([]);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/applications">My Applications</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/department/:id"
          element={<DepartmentDetail addApplication={app => setApplications([...applications, app])} />}
        />
        <Route path="/applications" element={<Applications applications={applications} />} />
      </Routes>
    </div>
  );
}

export default App;
