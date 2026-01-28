import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import "../CSS/Charts.css";

const TopModelsChart = ({ data }) => {
  return (
    <div className="chart_container">
      <h3 className="chart_title">Top 10 EV Models</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fontSize: 11, fontWeight: 500, fill: "#475569" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [value.toLocaleString(), "Vehicles"]}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
          />
          <Bar
            dataKey="count"
            radius={[0, 8, 8, 0]}
            barSize={28}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`rgba(16, 185, 129, ${1 - index * 0.08})`}
              />
            ))}
            <LabelList
              dataKey="count"
              position="right"
              formatter={(value) => value.toLocaleString()}
              style={{ fontSize: 12, fontWeight: 600, fill: "#64748b" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopModelsChart;
