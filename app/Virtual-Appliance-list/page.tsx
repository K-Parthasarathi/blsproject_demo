"use client";

import "./design.css";
import Nav from "../navbar/nav";

const appliances = [
  {
    name: "IAM Proxy 01",
    ip: "192.168.1.10",
    status: "Running",
    version: "3.2.1",
    heartbeat: "2024-07-29 09:35 AM",
  },
  {
    name: "IAM Gateway 02",
    ip: "192.168.1.11",
    status: "Running",
    version: "4.0.0",
    heartbeat: "2024-07-29 09:36 AM",
  },
  {
    name: "MFA Server US",
    ip: "10.0.0.5",
    status: "Running",
    version: "2.5.0",
    heartbeat: "2024-07-29 09:30 AM",
  },
  {
    name: "Provisioning Engine EU",
    ip: "172.16.0.20",
    status: "Degraded",
    version: "3.1.5",
    heartbeat: "2024-07-29 09:28 AM",
  },
  {
    name: "IAM Logging Node",
    ip: "10.0.0.6",
    status: "Running",
    version: "1.8.0",
    heartbeat: "2024-07-29 09:33 AM",
  },
];

export default function Page() {
  return (
    <div className="appliance-page">
      <Nav />

      <main className="appliance-container">
        <div className="page-header">
          <h1 className="page-title">Virtual Appliance List</h1>

          <p className="page-subtitle">
            Monitor appliance health, versions and connectivity status.
          </p>
        </div>

        <div className="table-wrapper overflow-x-auto">
          <table className="appliance-table">
            <thead>
              <tr>
                <th>Appliance Name</th>
                <th>IP Address</th>
                <th>Status</th>
                <th>Version</th>
                <th>Last Heartbeat</th>
              </tr>
            </thead>

            <tbody>
              {appliances.map((item, index) => (
                <tr key={index}>
                  <td className="font-medium">{item.name}</td>

                  <td>{item.ip}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        item.status === "Running"
                          ? "status-running"
                          : "status-degraded"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>{item.version}</td>

                  <td>{item.heartbeat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}