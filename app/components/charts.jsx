"use client";

import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  AreaChart,
  Area,
  LabelList,
} from "recharts";

/* ---------------- Doughnut ---------------- */

export const SourceChart = () => {
  const data = [
    { name: "Healthy", value: 94 },
    { name: "Error", value: 6 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={95}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((item, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="center-text">
        <h2>94%</h2>
        <p>Healthy</p>
      </div>
    </div>
  );
};

/* ---------------- Bar ---------------- */

export const CertificationChart = () => {
  const data = [
    { name: "Completed", value: 9, fill: "#22c55e" },
    { name: "Inprogress", value: 8, fill: "#F4B400" },
    { name: "Not started", value: 3, fill: "#EF4444" },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray="4 4" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar
  dataKey="value"
  radius={[8, 8, 0, 0]}
/>
      </BarChart>
    </ResponsiveContainer>
  );
};

/* ---------------- Line ---------------- */

export const ApplianceChart = () => {
  const data = [
    { day: "Mon", healthy: 3, error: 1 },
    { day: "Tue", healthy: 4, error: 1 },
    { day: "Wed", healthy: 5, error: 0 },
    { day: "Thu", healthy: 4, error: 1 },
    { day: "Fri", healthy: 4, error: 1 },
    { day: "Sat", healthy: 5, error: 0 },
    { day: "Sun", healthy: 4, error: 1 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Line
  dataKey="healthy"
  stroke="#22c55e"
  strokeWidth={3}
  dot={{ r: 5 }}
/>

        <Line
          dataKey="error"
          stroke="#ef4444"
          strokeWidth={3}
          dot={{ r: 5 }}
          
          
          />
        
      </LineChart>
    </ResponsiveContainer>
  );
};

/* ---------------- Area ---------------- */

export const UsersChart = () => {
  const data = [
    { date: "Apr 1", users: 980 },
    { date: "Apr 8", users: 1002 },
    { date: "Apr 15", users: 1045 },
    { date: "Apr 22", users: 1080 },
    { date: "Apr 29", users: 1120 },
  ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id="fillUsers"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#2563eb"
              stopOpacity={0.35}
            />

            <stop
              offset="95%"
              stopColor="#2563eb"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="4 4" />

        <XAxis dataKey="date" />

        <YAxis />

        <Tooltip />

        <Area
  dataKey="users"
  stroke="#2563eb"
  strokeWidth={3}
  fill="url(#fillUsers)"
/>
      </AreaChart>
    </ResponsiveContainer>
  );
};