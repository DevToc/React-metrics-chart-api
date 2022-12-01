import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2024", value: 37423 },
  { name: "2025", value: 139142 },
  { name: "2026", value: 142093 },
  { name: "historical", value: 123787 },
];
const colors = ["#ff0000", "#00ff00", "#efddfe", "#0000ff"];
const TestA = () => {
  return (
    <div className=" h-96 m-11">
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barGap={100}
          barCategoryGap="20%"
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            horizontal={false}
            vertical={true}
            strokeDasharray={11}
          />
          <XAxis type="number" angle={-30} tickCount={11} />
          <YAxis
            hide
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="name"
          />
          <Bar dataKey="value" fill="#323232" label={{ position: "right" }}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index]}
                barCategoryGap="10%"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestA;
