import React, { useState, useEffect, useContext } from "react";
import CONSTS from "../CONSTS";
import ClipLoader from "react-spinners/ClipLoader";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RateContext } from "../context/RateContext";

const Graph = ({ range }) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [Min, setMin] = useState(0);
  const [Max, setMax] = useState(0);
  // const [currentRate, setCurrentRate] = useState(0);
  const context = useContext(RateContext);

  const convertDataToGraphFormat = (jsonData) => {
    let values_list = [];
    let min = 9999999999999;
    let max = 0;
    for (const key in jsonData) {
      values_list.push({
        day: new Date(parseInt(key)).toLocaleString(),
        value: parseFloat(jsonData[key].toFixed(4)),
      });
      if (jsonData[key] < min) {
        min = jsonData[key];
      }
      if (jsonData[key] > max) {
        max = jsonData[key];
      }
    }
    setMin(parseInt(min - 150));
    setMax(parseInt(max + 150));
    return values_list;
  };
  const getMetrics = async (range) => {
    setSpinner(true);
    let response;
    switch (range) {
      case "all":
        response = await fetch(CONSTS.GET_ALL_METRICS_PASS);
        break;
      case "30d":
        response = await fetch(CONSTS.GET_30D_METRICS_PASS);
        break;

      default:
        response = await fetch(CONSTS.GET_24H_METRICS_PASS);
        break;
    }
    const myJson = await response.json();
    const values_list = convertDataToGraphFormat(myJson);
    setData(values_list);
    getCurrentRate();
    setSpinner(false);
  };

  useEffect(() => {
    getMetrics(range);
  }, [range]);

  const getCurrentRate = async () => {
    context.changeRate(true);
    const response = await fetch(CONSTS.GET_CURRENT_RATE);
    const data = await response.json();
    let rate = Object.values(data)[0];
    rate = parseFloat(rate);
    context.changeRate(rate);
  }

  useEffect(() => {
    const intervalId = setInterval(getCurrentRate, 60000);
    
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="max-w-[561px] mb-8 mx-4 sm:min-w-[500px] ">
      <div className="map-box-wrapper p-2 h-[300px] flex justify-center w-full">
        {!spinner ? (
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
              <XAxis
                dataKey="day"
                angle={-30}

                style={{
                  fontSize: "12",
                }
                }
              />
              <YAxis type="number" domain={[Min, Max]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#000000"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <ClipLoader
            color={"#000000"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
      <p className="sm:text-[40px] text-[26px] mt-3 font-extrabold text-[#A0A0A0] text-center">
        current rate: {context.rate.loading ? "loading..." : context.rate.current}
      </p>
    </div>
  );
};

export default Graph;
