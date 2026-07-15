"use client";

import {
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

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* ================= NAVBAR ================= */}
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

        {/* Source Status */}
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

          <SourceChart />

          <div className="mt-auto">
            <Link href="\Source-list" className="details"> Show more details </Link>
          </div>
        </div>

        {/* Certification Status */}
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
              In Progress
            </span>

            <span>
              <span className="dot red"></span>
              Not Started
            </span>
          </div>

          <CertificationChart />

          <div className="mt-auto">
            <Link href="/Certification-list" className="details">
              2 due this week
            </Link>
          </div>
        </div>

        {/* Virtual Appliance */}
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

          <div className="mt-auto">

            <Link href="/Virtual-Appliance-list" className="details">
              Show more details
            </Link>
          </div>
        </div>

      </section>

      {/* ================= USERS ================= */}
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