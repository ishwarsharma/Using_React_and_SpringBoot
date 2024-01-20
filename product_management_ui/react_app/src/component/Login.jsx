import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "../index.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility
  const history = useNavigate();

  // Function to handle the delayed navigation to the home page
  const navigateToHome = () => {
    history("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        // Login successful
        setMsg("Login successful"); // Set success message
        setError(""); // Clear error message
        setTimeout(navigateToHome, 2000); // Delay navigation to the home page after 2 seconds
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-3">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header fs-3 text-center">Log In</div>
          {msg && <p className="fs-4 text-center text-success">{msg}</p>}
          {error && <div className="error-message">{error}</div>}
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Enter User Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 position-relative">
                <label>Enter Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`password-toggle-icon ${
                      showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                    }`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
              </div>

              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </form>
          </div>
          <div className="card-footer text-center">
            <p>
              Don't have an account? <Link to="/signup">Create one</Link>{" "}
              {/* Link to registration page */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
