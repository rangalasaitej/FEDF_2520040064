import React, { useState } from "react";

function RegistrationForm() {
  // Hook: useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && course) {
      setMessage(
        `Registration Successful!\nName: ${name},\nEmail: ${email},\nCourse: ${course}`
      );
      // Reset form
      setName("");
      setEmail("");
      setCourse("");
    } else {
      setMessage("Please fill in all fields!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            id="course"
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter your course"
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>

      {message && (
        <div className="message-box">
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
