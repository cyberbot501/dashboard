import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const weeklyData = [
  { name: 'Sun', uv: 50, pv: 2400, amt: 2400 },
  { name: 'Mon', uv: 65, pv: 1398, amt: 2210 },
  { name: 'Tue', uv: 53, pv: 9800, amt: 2290 },
  { name: 'Wed', uv: 78, pv: 3908, amt: 2000 },
  { name: 'Thur', uv: 75, pv: 4800, amt: 2181 },
  { name: 'Fri', uv: 80, pv: 3800, amt: 2500 },
  { name: 'Sat', uv: 100, pv: 4300, amt: 7100 },
];

const dailyData = [
  { name: '1pm', uv: 30, pv: 2400, amt: 2400 },
  { name: '2pm', uv: 40, pv: 1398, amt: 2210 },
  { name: '3pm', uv: 55, pv: 9800, amt: 2290 },
  { name: '4pm', uv: 70, pv: 3908, amt: 2000 },
  { name: '5pm', uv: 65, pv: 4800, amt: 2181 },
  { name: '6pm', uv: 75, pv: 3800, amt: 2500 },
  { name: '7pm', uv: 90, pv: 4300, amt: 7100 },
];

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState('weekly');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const data = selectedOption === 'weekly' ? weeklyData : dailyData;

  return (
    <div className="">
      <div className="flex flex-row justify-between mt-2">
        <p className="text-[18px] font-normal pl-8">Sales</p>
        <select
          className="w-[100px] h-[30px] rounded-[5px] shadow border-[1px] border-white text-[16px] px-2 mr-8"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <div className="mt-8">
        <LineChart width={437} height={295} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;