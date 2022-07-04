import "./featured.scss";
import axios from 'axios';
import { useState,useEffect } from "react";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const Featured = ({ aspect, title }) => {
  const [data, setData] = useState();
  useEffect(() => {
  axios
  .get(
    `http://localhost:5000/grades`,
    {},
    { headers: { 'Content-Type': 'application/json' } }
  )
  .then((response) => {
    let machineLearning= 0;
    let dataViz = 0;
    let maths = 0;
    let mlcounter = 0;
    let dvcounter = 0;
    let mcounter = 0;
    for (let i = 0; i < response.data.length; i++) {
      if(response.data[i].itemid == 1){
          machineLearning = machineLearning + response.data[i].finalgrade
          mlcounter++
      }
      if(response.data[i].itemid == 2){
          dataViz = dataViz + response.data[i].finalgrade
          dvcounter++
      }
      if(response.data[i].itemid == 3){
          maths = maths + response.data[i].finalgrade
          mcounter++
      }
    }
    const tempdata = [
      {
        name: 'Machine Learning',
        uv: machineLearning/mlcounter,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Data Viz',
        uv: dataViz/dvcounter,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Maths',
        uv: maths/mcounter,
        pv: 9800,
        amt: 2290,
      },
    ];
    console.log(tempdata)
    setData(tempdata)
 
    
  })
  .catch((error) => {
    console.log('response: ', error.response.data.message);
  });
  }, []);
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="red" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Featured;
