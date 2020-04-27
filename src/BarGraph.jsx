import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
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

function getIntroOfPage(label) {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
}
const formatData = stats => {
  const newArray = [];
  stats.forEach(dp => {
    // see if country is in array
    const index = newArray.findIndex(i => i.name == dp.country);
    if (index == -1) {
      newArray.push({
        name: dp.country,
        deaths: dp.deaths,
        confirmed: dp.confirmed,
        recovered: dp.recovered
      });
    } else {
      newArray[index].deaths += dp.deaths;
      newArray[index].confirmed += dp.confirmed;
      newArray[index].recovered += dp.recovered;
    }
  });
  newArray.sort((a, b) => b.confirmed - a.confirmed);
  return newArray.slice(0, 10);
};
export default class Graph extends Component {

  render() {
    const data = formatData(this.props.covid19Stats);
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="deaths" fill="red" />
          <Bar dataKey="confirmed" fill="blue" />
          <Bar dataKey="recovered" fill="#42CA9D" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
