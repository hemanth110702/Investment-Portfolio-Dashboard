import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Charts from "./Charts";
import Tables from "./Tables";
import PerformanceMetrics from "./PerformanceMetrics";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <PerformanceMetrics />
          <Charts />
          <Tables />
        </div>
      </div>
    </div>
  );
}