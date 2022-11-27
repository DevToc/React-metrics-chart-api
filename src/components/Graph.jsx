import React from "react";
// import Map from "../assets/img/map.png";
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
    { date: '1609066800000', value: 98.4373 },
    { date: '1609070400000', value: 99.2545 },
    { date: '1609074000000', value: 100.2017 },
    { date: '1609077600000', value: 100.2948 },
    { date: '1609081200000', value: 100.4199 },
    { date: '1609084800000', value: 100.1141 },
    { date: '1609088400000', value: 101.0007 },
    { date: '1609092000000', value: 101.937 },
    { date: '1609095600000', value: 102.779 },
    { date: '1609099200000', value: 102.2459 },
    { date: '1609102800000', value: 101.9426 },
    { date: '1609106400000', value: 101.6368 },
    { date: '1609110000000', value: 103.0697 },
    { date: '1609113600000', value: 104.3565 },
    { date: '1609117200000', value: 105.3351 },
    { date: '1609120800000', value: 105.8989 },
    { date: '1609124400000', value: 106.4581 },
    { date: '1609128000000', value: 107.0412 },
    { date: '1609131600000', value: 107.1871 },
    { date: '1609135200000', value: 108.3263 },
    { date: '1609138800000', value: 109.9998 },
    { date: '1609142400000', value: 108.5931 },
    { date: '1609146000000', value: 107.6022 },
    { date: '1609149600000', value: 107.4696 },
    { date: '1609153200000', value: 108.0757 },
    { date: '1609156800000', value: 108.7516 },
    { date: '1609160400000', value: 107.5945 },
    { date: '1609164000000', value: 105.5022 },
    { date: '1609167600000', value: 104.1942 },
    { date: '1609171200000', value: 105.1966 },
    { date: '1609174800000', value: 107.2106 },
    { date: '1609178400000', value: 106.6338 },
    { date: '1609182000000', value: 105.6591 },
    { date: '1609185600000', value: 106.5949 },
    { date: '1609189200000', value: 107.2642 },
    { date: '1609192800000', value: 108.1718 },
    { date: '1609196400000', value: 108.1253 },
    { date: '1609200000000', value: 107.4448 },
    { date: '1609203600000', value: 106.856 },
    { date: '1609207200000', value: 107.1458 },
    { date: '1609210800000', value: 108.2397 },
    { date: '1609214400000', value: 107.9797 },
    { date: '1609218000000', value: 107.2717 },
    { date: '1609221600000', value: 106.7376 },
    { date: '1609225200000', value: 106.6797 },
    { date: '1609228800000', value: 107.5088 },
    { date: '1609232400000', value: 108.9226 },
    { date: '1609236000000', value: 110.6324 },
    { date: '1609239600000', value: 110.9015 },
    { date: '1609243200000', value: 112.4549 },
    { date: '1609246800000', value: 113.219 },
    { date: '1609250400000', value: 113.6539 },
    { date: '1609254000000', value: 113.7546 },
    { date: '1609257600000', value: 113.6745 },
    { date: '1609261200000', value: 113.6028 },
    { date: '1609264800000', value: 113.8787 },
    { date: '1609268400000', value: 114.8735 },
    { date: '1609272000000', value: 116.0195 },
    { date: '1609275600000', value: 117.9018 },
    { date: '1609279200000', value: 119.256 },
    { date: '1609282800000', value: 120.5342 },
    { date: '1609286400000', value: 121.5418 },
    { date: '1609290000000', value: 123.4025 },
    { date: '1609293600000', value: 125.1984 },
    { date: '1609297200000', value: 127.1959 },
    { date: '1609300800000', value: 127.6393 },
    { date: '1609304400000', value: 126.7479 },
    { date: '1609308000000', value: 124.8165 },
    { date: '1609311600000', value: 123.3699 },
    { date: '1609315200000', value: 122.018 },
    { date: '1609318800000', value: 120.8372 },
    { date: '1609322400000', value: 120.2798 },
    { date: '1609326000000', value: 119.8534 },
    { date: '1609329600000', value: 119.1895 },
    { date: '1609333200000', value: 117.495 },
    { date: '1609336800000', value: 116.4213 },
    { date: '1609340400000', value: 115.8303 },
    { date: '1609344000000', value: 117.4107 },
    { date: '1609347600000', value: 118.9776 },
    { date: '1609351200000', value: 120.3106 },
    { date: '1609354800000', value: 121.024 },
    { date: '1609358400000', value: 122.5446 },
    { date: '1609362000000', value: 124.4846 },
    { date: '1609365600000', value: 126.9116 },
    { date: '1609369200000', value: 129.1735 },
    { date: '1609372800000', value: 129.9964 },
    { date: '1609376400000', value: 130.2307 },
    { date: '1609380000000', value: 129.8493 },
    { date: '1609383600000', value: 129.2744 },
    { date: '1609387200000', value: 129.3556 },
    { date: '1609390800000', value: 129.588 },
    { date: '1609394400000', value: 130.0898 },
    { date: '1609398000000', value: 130.6803 },
    { date: '1609401600000', value: 131.3528 },
    { date: '1609405200000', value: 132.4096 },
    { date: '1609408800000', value: 133.175 },
    { date: '1609412400000', value: 133.1998 },
    { date: '1609416000000', value: 132.3803 },
    { date: '1609419600000', value: 130.4937 },
    { date: '1609423200000', value: 129.2407 } ];

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
            <XAxis dataKey="date" />
            <YAxis type="number" domain={[80,120]}/>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
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
