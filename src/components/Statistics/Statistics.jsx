import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];

const Statistics = () => {


    const data = [
        { name: 'Assignment-1', value: 60 },
        { name: 'Assignment-2', value: 56 },
        { name: 'Assignment-3', value: 55},
        { name: 'Assignment-4', value: 59},
        { name: 'Assignment-5', value: 58},
        { name: 'Assignment-6', value: 57},
        { name: 'Assignment-7', value: 60},
      ];

    return (
      <div className='grid md:grid-cols-3'>
        
        <div className=""></div>
        <div className="">
        <div className=''>
            <PieChart
             width={500}
             height={500}
            >
                <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip></Tooltip>
      <Legend></Legend>
            </PieChart>
        </div>
        </div>
        <div className=""></div>
        </div>

        
    );
};

export default Statistics;