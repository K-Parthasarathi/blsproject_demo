"use client";

import React, { useState } from "react";
import "./App.css";
import Nav from "../navbar/nav";
import { useRouter } from "next/navigation";

function App() {
  const router = useRouter();

  const [tenant, setTenant] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");

  // Example correct credentials
  const correctTenant = "mysailpointtenant";
  const correctClientId = "admin123";
  const correctClientSecret = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      tenant === correctTenant &&
      clientId === correctClientId &&
      clientSecret === correctClientSecret
    ) {
      setError("");

      // Navigate to next page
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="app">
      <Nav />

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

          {/* Error Message */}
          {error && (
            <p className="error-message">{error}</p>
          )}

          {/* Form */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tenant Name</label>
              <input
                type="text"
                placeholder="e.g., mysailpointtenant"
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Client ID</label>
              <input
                type="text"
                placeholder="e.g., your-client-id-xyz"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Client Secret</label>
              <input
                type="password"
                placeholder="e.g., your-client-secret-abc"
                value={clientSecret}
                onChange={(e) =>
                  setClientSecret(e.target.value)
                }
              />
            </div>

            <button type="submit" className="connect-btn">
              Connect
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;