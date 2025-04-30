import React, { useState } from 'react';

function AdmissionForm({ department, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email.includes('@')) return alert('Please enter valid data');

    onSubmit({ name, email, department });
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {submitted && <p className="success">Application submitted successfully!</p>}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default AdmissionForm;
