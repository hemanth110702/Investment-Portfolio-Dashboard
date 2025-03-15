import React from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

// Sample data for sector allocation
const sectorData = [
  { name: "IT", value: 38 },
  { name: "Financials", value: 37 },
  { name: "Energy", value: 25 },
];

// Sample data for stock allocation
const stockData = [
  { name: "Reliance Industries", value: 25 },
  { name: "HDFC Bank", value: 22 },
  { name: "TCS", value: 20 },
  { name: "Infosys", value: 18 },
  { name: "ICICI Bank", value: 15 },
];

// Sample data for market cap allocation
const marketCapData = [
  { name: "Large Cap", value: 98 },
  { name: "Mid Cap", value: 2 },
  { name: "Small Cap", value: 0 },
];

export default function Charts() {
  return (
    <div>
      <h2>Sector Allocation</h2>
      <PieChart width={400} height={400}>
        <Pie data={sectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
          {sectorData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <h2>Stock Allocation</h2>
      <BarChart width={500} height={300} data={stockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

      <h2>Market Cap Allocation</h2>
      <PieChart width={400} height={400}>
        <Pie data={marketCapData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#82ca9d">
          {marketCapData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}