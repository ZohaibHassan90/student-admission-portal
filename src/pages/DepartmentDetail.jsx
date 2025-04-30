import React from 'react';
import { useParams } from 'react-router-dom';
import AdmissionForm from '../components/AdmissionForm';

function DepartmentDetail({ addApplication }) {
  const { id } = useParams();

  return (
    <div>
      <h2>Apply to {id.toUpperCase()} Department</h2>
      <AdmissionForm department={id} onSubmit={addApplication} />
    </div>
  );
}

export default DepartmentDetail;
