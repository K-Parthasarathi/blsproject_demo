"use client";

import "./design.css";
import Nav from "../navbar/nav";

const certifications = [
  {
    name: "Q3 2024 User Access Review",
    status: "Pending",
    dueDate: "2024-08-15",
    owner: "Compliance Team",
    progress: "45%",
  },
  {
    name: "Finance Dept Access Audit",
    status: "Overdue",
    dueDate: "2024-07-20",
    owner: "Auditors",
    progress: "80%",
  },
  {
    name: "New Hire Onboarding Check",
    status: "Completed",
    dueDate: "2024-07-25",
    owner: "HR Team",
    progress: "100%",
  },
  {
    name: "Vendor Access Recertification",
    status: "Pending",
    dueDate: "2024-09-01",
    owner: "Procurement",
    progress: "10%",
  },
  {
    name: "Privileged Access Review",
    status: "Pending",
    dueDate: "2024-08-05",
    owner: "Security Team",
    progress: "70%",
  },
];

export default function Page() {
  return (
    <div className="certification-page">
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <main className="certification-container">
        <div className="page-header">
          <h1 className="page-title">Certification List</h1>
          <p className="page-subtitle">
            Track certification campaigns, review progress, and monitor due dates.
          </p>
        </div>

        <div className="table-wrapper overflow-x-auto">
          <table className="certification-table">
            <thead>
              <tr>
                <th>Certification Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Owner</th>
                <th>Progress</th>
              </tr>
            </thead>

            <tbody>
              {certifications.map((item, index) => (
                <tr key={index}>
                  <td className="font-medium">{item.name}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        item.status === "Completed"
                          ? "status-completed"
                          : item.status === "Pending"
                          ? "status-pending"
                          : "status-overdue"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>{item.dueDate}</td>

                  <td>{item.owner}</td>

                  <td>{item.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}