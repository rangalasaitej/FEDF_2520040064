import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Student Registration System</h1>
        <p>Register for your courses using React Hooks</p>
      </header>
      <main>
        <RegistrationForm />
      </main>
      <footer>
        <p>© 2024 Student Registration System | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
