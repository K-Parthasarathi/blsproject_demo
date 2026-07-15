"use client";

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
} from "recharts";

/* ===========================
   SOURCE STATUS
=========================== */
const SourceTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0].payload;

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "8px 12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
        fontSize: "13px",
    
      }}
    >
      <strong>{item.name}</strong>
      <br />
      {item.count}
    </div>
  );
};

export const SourceChart = () => {
  const data = [
     {
    name: "Running",
    value: 94,
    count: "15 / 16 Running",
  },
  {
    name: "Error",
    value: 6,
    count: "1 / 16 Error",
  },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={72}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((item, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
    <Tooltip
    content={<SourceTooltip />}
    cursor={false}
    position={{ x: 270, y: 60 }}
  />
        </PieChart>
      </ResponsiveContainer>

      <div className="center-text">
        <h2>94%</h2>
        <p>Healthy</p>
      </div>
    </div>
  );
};

/* ===========================
   CERTIFICATION STATUS
=========================== */

export const CertificationChart = () => {
  const data = [
    { name: "Completed", value: 9, fill: "#22c55e" },
    { name: "In Progress", value: 8, fill: "#F4B400" },
    { name: "Not Started", value: 3, fill: "#EF4444" },
  ];

  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="4 4" />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 11 }}
            interval={0}
          />

          <YAxis />

          <Tooltip
            cursor={false}
            formatter={(value) => [value, "Count"]}
          />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.fill}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/* ===========================
   VIRTUAL APPLIANCE
=========================== */

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
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip cursor={false} />

          <Line
            type="monotone"
            dataKey="healthy"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

          <Line
            type="monotone"
            dataKey="error"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

/* ===========================
   ACTIVE USERS
=========================== */

export const UsersChart = () => {
  const data = [
    { date: "Apr 1", users: 980 },
    { date: "Apr 8", users: 1002 },
    { date: "Apr 15", users: 1045 },
    { date: "Apr 22", users: 1080 },
    { date: "Apr 29", users: 1120 },
  ];

  return (
    <div className="users-chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
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

          <Tooltip cursor={false} />

          <Area
            type="monotone"
            dataKey="users"
            stroke="#2563eb"
            strokeWidth={3}
            fill="url(#fillUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};