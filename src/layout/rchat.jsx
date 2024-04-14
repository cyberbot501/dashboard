import React, { PureComponent } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 53,
    pv: 53,
    amt: 1400,
  },
  {
    name: "2",
    uv: 46,
    pv: 46,
    amt: 1506,
  },
  {
    name: "3",
    uv: 100,
    pv: 100,
    amt: 989,
  },
  {
    name: "4",
    uv: 50,
    pv: 50,
    amt: 1228,
  },
  {
    name: "5",
    uv: 65,
    pv: 65,
    amt: 1100,
  },
  {
    name: "6",
    uv: 45,
    pv: 45,
    amt: 1700,
  },
  {
    name: "7",
    uv: 45,
    pv: 45,
    amt: 1700,
  },
  {
    name: "8",
    uv: 53,
    pv: 53,
    amt: 1700,
  },
  {
    name: "9",
    uv: 68,
    pv: 68,
    amt: 1700,
  },
  {
    name: "10",
    uv: 75,
    pv: 75,
    amt: 1700,
  },
  {
    name: "11",
    uv: 40,
    pv: 40,
    amt: 1700,
  },
  {
    name: "12",
    uv: 60,
    pv: 60,
    amt: 1700,
  },
];

export default function rchat() {
  return (
    <div className="">
      <div className="flex flex-row justify-between mt-2">
        <div className="pl-8 flex-col">
          <p className="text-[18px] font-normal ">Revenue</p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-1 items-center">
              <div className="border-[1px] border-[#96C200] rounded-[10px] w-[10px] h-[10px] bg-[#96C200]"></div>
              <p className="text-[10px] font-normal">Above Average</p>
            </div>

            <div className="flex flex-row gap-1 items-center">
              <div className="border-[1px] border-[#96C20022] rounded-[10px] w-[10px] h-[10px] bg-[#96C20022]"></div>
              <p className="text-[10px] font-normal">Below Average</p>
            </div>
          </div>
        </div>
        <select
          className="w-[100px] h-[30px] rounded-[5px] shadow border-[1px] border-white text-[16px] px-2 mr-8"
          // value={selectedOption}
          // onChange={handleOptionChange}
        >
          <option value="weekly">Jan</option>
          <option value="daily">Feb</option>
          <option value="daily">Mar</option>
          <option value="daily">Apr</option>
          <option value="daily">Jun</option>
          <option value="daily">Jul</option>
          <option value="daily">Aug</option>
          <option value="daily">Sep</option>
          <option value="daily">Oct</option>
          <option value="daily">Nov</option>
          <option value="daily">Dec</option>
        </select>
      </div>

      <div className="mt-8">
        <ComposedChart width={437} height={295} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="uv" barSize={20} fill="#96C200" />
          {/* <Line type="monotone" dataKey="pv" stroke="#ff7300" /> */}
        </ComposedChart>
      </div>
    </div>
  );
}
