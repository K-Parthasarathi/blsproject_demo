"use client";

import React, { useState } from "react";
import { User, Settings, LogOut } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import "./nav.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
        {/* Left side */}
            <div className="nav-left">
                {/* <span className="back">←</span> */}
                <ShieldCheck className="logo-icon" />
                <span className="nav-title">BLSecure360</span>
            </div>

        {/* Right side */}
            <div className="nav-right">
                <div className="profile" onClick={() => setOpen(!open)}>
                    <img
                        src="circle-user-solid.svg"
                        alt="profile"
                        className="avatar"
                    />
                </div>
                {open && (
                    <div className="dropdown">
                        <div className="user-info">
                            <strong>Joseph Vijay</strong>
                            <span>joseph.vijay@iamsecure.com</span>
                        </div>

                        <div className="menu-item">Profile</div>
                        <div className="menu-item">Settings</div>

                        <div className="divider"></div>

                        <Link href="/login" className="menu-item logout">Logout</Link>
                    </div>
                )}
            </div>
        </header>
    );
}