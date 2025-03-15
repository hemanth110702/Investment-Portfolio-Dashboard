import React from "react";

export default function PerformanceMetrics() {
  return (
    <div>
      <h2>Performance Metrics</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Current Investment Value</h3>
          <p>-0.4%</p>
          <p>-0.5%</p>
        </div>
        <div>
          <h3>Best Performing Scheme</h3>
          <p>-19%</p>
        </div>
        <div>
          <h3>Worst Performing Scheme</h3>
          <p>-5%</p>
        </div>
      </div>
    </div>
  );
}