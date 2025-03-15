import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tables() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get("http://localhost:8000/api/investments")
      .then((response) => setInvestments(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Investment Overview</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mutual Fund</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Investment Date</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount Invested (INR)</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ISN</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>NAV at Investment</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Returns Since Investment</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{investment.mutual_fund_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{investment.investment_date}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{investment.amount_invested}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{investment.isn}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{investment.nav_at_investment}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{investment.returns_since_investment}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}