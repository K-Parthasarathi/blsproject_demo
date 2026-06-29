"use client";

import React from "react";
import {
  FiArrowLeft,
  FiShield,
  FiCloud,
  FiFileText,
  FiServer,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";

import {
  SourceChart,
  CertificationChart,
  ApplianceChart,
  UsersChart,
} from "../components/charts";

import "./dashboard.css";
import Link from "next/link";
import Nav from "../navbar/nav";
import { useRouter } from "next/navigation";



      


/* -------------------- DATA -------------------- */

const sourceData = [
  { name: "Healthy", value: 94 },
  { name: "Error", value: 6 },
];

const certificationData = [
  { name: "Completed", value: 9, fill: "#22c55e" },
  { name: "Inprogress", value: 8, fill: "#f4b400" },
  { name: "Not started", value: 3, fill: "#ef4444" },
];

const applianceData = [
  { day: "Mon", healthy: 3, error: 1 },
  { day: "Tue", healthy: 4, error: 1 },
  { day: "Wed", healthy: 5, error: 0 },
  { day: "Thu", healthy: 4, error: 1 },
  { day: "Fri", healthy: 4, error: 1 },
  { day: "Sat", healthy: 5, error: 0 },
  { day: "Sun", healthy: 4, error: 1 },
];

const usersData = [
  { name: "Apr 1", users: 980 },
  { name: "Apr 8", users: 1002 },
  { name: "Apr 15", users: 1045 },
  { name: "Apr 22", users: 1080 },
  { name: "Apr 29", users: 1120 },
];

const COLORS = ["#22c55e", "#ef4444"];

/* ====================================================== */

export default function Dashboard() {
  return (

    <div className="dashboard">
      <Nav />



      {/* ================= TITLE ================= */}

      <div className="title-row">

        <h1>IAM Dashboard Overview</h1>

        <Link href="/home_page" className="product-btn">
          <FiGlobe />
          <span>View Other IAM Products</span>
        </Link>

      </div>

      {/* ================= TOP CARDS ================= */}

      <section className="top-cards">

        {/* ---------------- Source Status ---------------- */}

        <div className="card">

          <div className="card-header">
            <h3>Source Status</h3>
            <FiCloud />
          </div>

          <div className="legend">

            <span>
              <span className="dot green"></span>
              Healthy
            </span>

            <span>
              <span className="dot red"></span>
              Error
            </span>

          </div>

          {/* Chart Here */}

          <SourceChart />

          <h2 className="card-value">
            15/16 Active
          </h2>

          <Link href="/source" className="details">show more details</Link>

        </div>

        {/* ---------------- Certification ---------------- */}

        <div className="card">

          <div className="card-header">
            <h3>Certification Status</h3>
            <FiFileText />
          </div>

          <div className="legend">

            <span>
              <span className="dot green"></span>
              Completed
            </span>

            <span>
              <span className="dot yellow"></span>
              Inprogress
            </span>

            <span>
              <span className="dot red"></span>
              Not started
            </span>

          </div>

          {/* Chart */}

          <CertificationChart />

          <a href="/certification" className="details">2 due this week</a>

        </div>

        {/* ---------------- Appliance ---------------- */}

        <div className="card">

          <div className="card-header">
            <h3>Virtual Appliance Status</h3>
            <FiServer />
          </div>

          <div className="legend">

            <span>
              <span className="dot green"></span>
              Healthy
            </span>

            <span>
              <span className="dot red"></span>
              Error
            </span>

          </div>

          <ApplianceChart />

          <h2 className="card-value">
            4/5 Running
          </h2>

          <a href="/Virtual" className="details">show more details</a>
        </div>

      </section>

      {/* ================= USERS CARD ================= */}

      <section className="bottom-card">

        <div className="users-left">

          <div className="card-header">

            <h3>Total Active Users</h3>

            <FiUsers />

          </div>

          <h1>1,120</h1>

          <p className="growth">

            <span>3%</span> increase this month ↑

          </p>

        </div>

        <div className="users-chart">

          <UsersChart />

        </div>

      </section>

    </div>
  );
}



