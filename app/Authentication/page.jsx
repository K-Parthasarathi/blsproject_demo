"use client";
import React, { useState } from "react";
import "./App.css";
import {
  ChevronLeft,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="back-btn">
            <ChevronLeft size={22} />
          </button>

          <div className="logo-section">
            <div className="logo-box">
              <div className="logo-inner"></div>
            </div>

            <h1 className="logo-text">IAM Secure</h1>
          </div>
        </div>

        {/* Profile */}
        <div className="profile-wrapper">
          <button
            className="profile-btn"
            onClick={() => setOpen(!open)}
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />

            <span className="online-dot"></span>
          </button>

          {open && (
            <div className="dropdown">
              <div className="dropdown-user">
                <h3>John Doe</h3>
                <p>john.doe@iamsecure.com</p>
              </div>

              <div className="divider"></div>

              <button className="dropdown-item">
                <User size={18} />
                <span>Profile</span>
              </button>

              <button className="dropdown-item">
                <Settings size={18} />
                <span>Settings</span>
              </button>

              <div className="divider"></div>

              <button className="dropdown-item logout">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="main-content">
        <div className="auth-card">
          <h2>SailPoint ISC Authentication</h2>

          <p className="description">
            Please enter your SailPoint ISC authentication
            details. These credentials are used to establish a
            secure connection with your identity governance
            platform.
          </p>

          {/* Note */}
          <div className="note-box">
            <p>
              <strong>Note:</strong> Please ensure you have set
              the correct scope for these credentials to access
              the required identity data.
            </p>
          </div>

          {/* Form */}
          <form className="form">
            <div className="form-group">
              <label>Tenant Name</label>
              <input
                type="text"
                placeholder="e.g., mysailpointtenant"
              />
            </div>

            <div className="form-group">
              <label>Client ID</label>
              <input
                type="text"
                placeholder="e.g., your-client-id-xyz"
              />
            </div>

            <div className="form-group">
              <label>Client Secret</label>
              <input
                type="password"
                placeholder="e.g., your-client-secret-abc"
              />
            </div>

            <button className="connect-btn">
              Connect
            </button>
          </form>
        </div>
      </main>

    </div>
  );
}

export default App;