import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility
  const [userEmail, setUserEmail] = useState(""); // State for user's email
  const navigate = useNavigate();

  // Function to handle the delayed navigation
  const navigateToLogin = () => {
    navigate("/login");
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form fields
    if (!username || !password || !fullname || !email) {
      setError("Please fill in all fields.");
      return;
    }
  
    try {
      // Registration request
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        {
          username,
          password,
          fullname,
          email,
        }
      );
  
      if (response.status === 201) {
        // Registration successful
        setMsg("Registration Successful");
        setError("");
  
        // Send a welcome email with the email address
        const emailResponse = await axios.post(
          "http://localhost:8080/mail/sendWelcomeEmail",
          email, // Use the email variable directly
          {
            headers: {
              "Content-Type": "text/plain", // Set the content type to plain text
            },
          }
        );
  
        if (emailResponse.status === 200) {
          console.log("Email sent successfully");
  
          // Delay navigation to the login page after 2 seconds
          setTimeout(navigateToLogin, 2000);
        } else {
          console.error("Failed to send email");
        }
      } else {
        setError("Registration failed. Please try again.");
        setMsg("");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      setMsg("");
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
          <div className="card-header fs-3 text-center">Register</div>
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
                    type={showPassword ? "text" : "password"}
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

              <div className="mb-3">
                <label>Enter Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Enter Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="btn btn-primary btn-block" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
