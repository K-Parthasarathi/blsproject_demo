"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./login.css"; // your Tailwind @apply file

const Login = () => {
  return (
    <div className="main-container">
      
      {/* LEFT PANEL */}
      <div className="left-panel">
          {/* <h1>Logo</h1> */}
          <Image
            src="/blswhite_logo.png"
            alt="BLS360Logo"
            width={500}
            height={500}
          />
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="login-card">
          <h1>IAM Secure</h1>
          <h2>Sign In</h2>
          <p>Login with your Email ID</p>

          {/* EMAIL */}
          <label className="email_label">Email</label>
          <input type="text" placeholder="your.email@example.com" />

          {/* PASSWORD */}
          <label className="pwd_label">Password</label>
          <input className="text-lg tracking-[0.2em] font-semibold" type="password" placeholder="........" />

          {/* OPTIONS */}
          <div className="options">
            <div className="check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="remember_me">Remember Me</label>
            </div>
            <span className="link">Forgot Password?</span>
          </div>

          {/* BUTTON */}
          <button className="signin-btn">Sign In</button>

          {/* BOTTOM TEXT */}
          <div className="bottom-text">
            <span>Don't have an account?</span>
            <Link href="/signup" className="link">Sign up</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;