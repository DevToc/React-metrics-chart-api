import React from "react";
import Map from "../assets/img/map.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
const Graph = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="max-w-[561px] mb-8 mx-4 sm:min-w-[500px] ">
      <div className="map-box-wrapper p-2 h-[300px] flex justify-center w-full">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" />
            <YAxis /> */}
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#000000"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="sm:text-[40px] text-[26px] mt-3 font-extrabold text-[#A0A0A0] text-center">
        current rate : 442.25863
      </p>
    </div>
  );
};

export default Graph;
