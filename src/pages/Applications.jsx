import React from 'react';

function Applications({ applications }) {
  return (
    <div className="applications-page">
      <h2 className="applications-title">📋 Submitted Applications</h2>

      {applications.length === 0 ? (
        <p className="no-applications">No applications have been submitted yet.</p>
      ) : (
        <div className="applications-grid">
          {applications.map((app, index) => (
            <div className="application-card" key={index}>
              <h3>{app.name}</h3>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Department:</strong> {app.department.toUpperCase()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications;
