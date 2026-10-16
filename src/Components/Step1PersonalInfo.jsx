import { useState } from 'react';

function Step1PersonalInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.phone.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Next Step');
    }
  };

  return (
    <div className="step-container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {isFormValid && (
          <div className="buttons-group">
            <button type="submit" className="btn-next">Next Step</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Step1PersonalInfo;