import React from 'react';
import { useNavigate } from 'react-router-dom';

function DepartmentCard({ dept }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/department/${dept.id}`)}>
      <h2>{dept.name}</h2>
      <p>{dept.desc}</p>
    </div>
  );
}

export default DepartmentCard;
