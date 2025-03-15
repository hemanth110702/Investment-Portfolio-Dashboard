import React from "react";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <h3>Navigation</h3>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>Dashboard</li>
        <li>Performance</li>
        <li>Reports</li>
      </ul>
    </div>
  );
}