"use client";

import "./design.css";
import Nav from "../navbar/nav";

const sources = [
  {
    type: "Azure Active Directory",
    status: "Active",
    sync: "2024-07-29 08:00 AM",
    owner: "IT Operations",
  },
  {
    type: "Workday",
    status: "Active",
    sync: "2024-07-29 07:30 AM",
    owner: "HR Team",
  },
  {
    type: "Salesforce",
    status: "Active",
    sync: "2024-07-29 09:00 AM",
    owner: "Sales Admin",
  },
  {
    type: "OpenLDAP",
    status: "Active",
    sync: "2024-07-29 08:15 AM",
    owner: "Infrastructure",
  },
  {
    type: "Database",
    status: "Error",
    sync: "2024-07-28 04:00 PM",
    owner: "Finance Dev",
  },
  {
    type: "AWS S3",
    status: "Active",
    sync: "2024-07-29 07:00 AM",
    owner: "Marketing Team",
  },
];

export default function Page() {
  return (
    <div className="source-page">
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <main className="source-card">
        <div className="mb-10">
          <h1 className="page-title">Source List</h1>

          <p className="page-subtitle">
            View and monitor all configured identity sources.
          </p>
        </div>

        <div className="table-wrapper overflow-x-auto">
          <table className="source-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Status</th>
                <th>Last Sync</th>
                <th>Owner</th>
              </tr>
            </thead>

            <tbody>
              {sources.map((item, index) => (
                <tr key={index}>
                  <td className="font-medium">{item.type}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        item.status === "Active"
                          ? "status-active"
                          : "status-error"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>{item.sync}</td>

                  <td>{item.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}