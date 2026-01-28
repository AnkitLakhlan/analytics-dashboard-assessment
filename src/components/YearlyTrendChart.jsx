import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../CSS/Charts.css";

const YearlyTrendChart = ({ data }) => {
  return (
    <>
      <div className="chart_container">
        <h3 className="chart_title">EV Registrations by Year</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => value.toLocaleString()}
              tick={{
                fontSize: 12,
              }}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default YearlyTrendChart;