import React, { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState({
    facultyName: "",
    facultyId: "",
    region: "",
    mobile: "",
    email: ""
  });

  const [login, setLogin] = useState({
    email: "",
    mobile: ""
  });

  const registerUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");
    setIsLogin(true);
  };

  const loginUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Guard check in case localStorage is empty
    if (!storedUser) {
      alert("No registered user found.");
      return;
    }

    if (
      storedUser.email === login.email &&
      storedUser.mobile === login.mobile
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{
      width: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid gray",
      borderRadius: "10px"
    }}>

      {!isLogin ? (

        <div>
          <h2>Registration Form</h2>

          <input
            placeholder="Faculty Name"
            value={user.facultyName}
            onChange={(e) =>
              setUser({
                ...user,
                facultyName: e.target.value
              })}
          /><br /><br />

          <input
            placeholder="Faculty ID"
            value={user.facultyId}
            onChange={(e) =>
              setUser({
                ...user,
                facultyId: e.target.value
              })}
          /><br /><br />

          <input
            placeholder="Region"
            value={user.region}
            onChange={(e) =>
              setUser({
                ...user,
                region: e.target.value
              })}
          /><br /><br />

          <input
            placeholder="Mobile Number"
            value={user.mobile}
            onChange={(e) =>
              setUser({
                ...user,
                mobile: e.target.value
              })}
          /><br /><br />

          <input
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value
              })}
          /><br /><br />

          <button onClick={registerUser}>
            Register
          </button>

          <p>
            Already Registered?
            <button
              onClick={() => setIsLogin(true)}>
              Login
            </button>
          </p>

        </div>

      ) : (

        <div>

          <h2>Login Form</h2>

          <input
            placeholder="Email"
            value={login.email}
            onChange={(e) =>
              setLogin({
                ...login,
                email: e.target.value
              })}
          /><br /><br />

          <input
            placeholder="Mobile Number"
            value={login.mobile}
            onChange={(e) =>
              setLogin({
                ...login,
                mobile: e.target.value
              })}
          /><br /><br />

          <button onClick={loginUser}>
            Login
          </button>

          <p>
            New User?
            <button
              onClick={() => setIsLogin(false)}>
              Register
            </button>
          </p>

        </div>

      )}

    </div>
  );
}

export default App;