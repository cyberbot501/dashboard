import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Sun',
    uv: 50,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    uv: 65,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    uv: 53,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 78,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thur',
    uv: 75,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 80,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    uv: 100,
    pv: 4300,
    amt: 7100,
  },
];

export default function chart() {
  
    return (
      <div className=''>
        <div className='flex flex-row justify-between mt-2'>
            <p className='text-[18px] font-normal pl-8'>Sales</p>
            <select className='w-[100px] h-[30px] rounded-[5px] shadow border-[1px] border-white text-[16px] px-2 mr-8'>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
        </div>

        <div className='mt-8'>
          <LineChart
            width={437}
            height={295}
            data={data}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
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
  
}
