import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#1E1E1E', '#FF8042', '#8884d8', '#D394E9', '#ffc658', '#62F700'];

const Statistics = () => {


    const data = [
        { name: 'Assignment-1', value: 60 },
        { name: 'Assignment-2', value: 59 },
        { name: 'Assignment-3', value: 60},
        { name: 'Assignment-4', value: 59},
        { name: 'Assignment-5', value: 60},
        { name: 'Assignment-6', value: 59},
        { name: 'Assignment-7', value: 60},
        { name: 'Assignment-8', value: 59},
      ];

    return (
      
      <div>
        <div className='font-bold text-3xl text-center py-10'>Statistics</div>
        <div className='grid justify-items-center md:grid-cols-3 '>
        
        <div className=""></div>
        <div className="justify-center">
        <div className=''>
            <PieChart
             width={350}
             height={400}
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
      </div>

        
    );
};

export default Statistics;