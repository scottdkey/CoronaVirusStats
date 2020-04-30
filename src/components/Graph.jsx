import React, { Component } from "react";
import "./Graph.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
// import DefaultTooltipContent from "recharts/lib/component/DefaultTooltipContent";


// const CustomTooltip = props => {
//   // payload[0] doesn't exist when tooltip isn't visible
//   if (props.payload[0] != null) {
//     // mutating props directly is against react's conventions
//     // so we create a new payload with the name and value fields set to what we want
//     const newPayload = [
//       {
//         name: "Name",
//         // all your data which created the tooltip is located in the .payload property
//         value: props.payload[0].payload.name
//         // you can also add "unit" here if you need it
//       },
//       ...props.payload
//     ];

//     // we render the default, but with our overridden payload
//     return <DefaultTooltipContent {...props} payload={newPayload} />;
//   }

//   // we just render the default
//   return <DefaultTooltipContent {...props} />;
// };


export default class Graph extends Component {
  formatData = stats => {
    const newArray = [];
    stats.forEach(dp => {
      // see if country is in array
      const index = newArray.findIndex(i => i.name === dp.country);
      if (index === -1) {
        newArray.push({
          name: dp.country,
          Deaths: dp.deaths,
          Confirmed: dp.confirmed,
          Recovered: dp.recovered
        });
      } else {
        newArray[index].Deaths += dp.deaths;
        newArray[index].Confirmed += dp.confirmed;
        newArray[index].Recovered += dp.recovered;
      }
    });
    newArray.sort((a, b) => b.Confirmed - a.Confirmed);
    return newArray.slice(0, 10);
  };
  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  render() {
    const data = this.formatData(this.props.covid19Stats);
    return (
      
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" interval={0} tick={{ fontSize: 7 }} />
          <YAxis
            tickFormatter={tick => {
              return this.kFormatter(tick);
            }}
          />
          <Tooltip />
          <Legend/>
          <Bar dataKey="Deaths" fill="#c92b30" />
          <Bar dataKey="Confirmed" fill="#4590d8" />
          <Bar dataKey="Recovered" fill="#53caaa" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

