import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events, locations }) => {
  const [data, setData] = useState([]);
  
  const COLORS = ["#FFB6C1", "#708090", "#FFBB28", "#FF8042"];

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };

    setData(() => getData());
  }, [events]);


  
  

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={125}
          fill="#FFB6C1"
          dataKey="value"
          label={({ name, percent }) => {
            if (percent > 0) {
                return `${name} ${(percent * 100).toFixed(0)}%`;
          }
        }} 
        >
            {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              name={entry.name} 
            /> 
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;