import React from "react";
import ReactDOM from "react-dom"
import "./App.css"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const Example = ({ covid19Stats }) => {
  const formatData = (stats) => {
    const newArray = [];
    stats.forEach((dp) => {
      // see if country is in array
      const index = newArray.findIndex((i) => i.name == dp.country);
      if (index == -1) {
        newArray.push({
          name: dp.country,
          deaths: dp.deaths,
          confirmed: dp.confirmed,
          recovered: dp.recovered,
        });
      } else {
        newArray[index].deaths += dp.deaths;
        newArray[index].confirmed += dp.confirmed;
        newArray[index].recovered += dp.recovered;
      }
    });
    newArray.sort((a,b) => b.confirmed - a.confirmed)
    return newArray.slice(0,10);
  };
  const data = formatData(covid19Stats);
  return (
    <div style={styles.barGraph}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="deaths" fill="red" />
          <Bar dataKey="confirmed" fill="blue" />
          <Bar dataKey="recovered" fill="#42CA9D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example

const styles = {
  barGraph: {
    height: "100%",
    maxHeight: "600px"
  }
}
