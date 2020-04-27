import React, {useEffect, useState} from 'react';
import './App.css';
import Graph from './BarGraph'
import CovidImage from "./images/covid.png"




function App() {
  const [covid19Stats, setCovid19Stats] = useState([])
  const [lastChecked, setLastChecked] = useState('')

  useEffect(()=>{
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "99eeb5b743msh92f00d28fbdb1c6p119ecfjsnd0af0be55161",
        },
      }
    )
    .then(response => response.json())
    .then((data) => {
        setCovid19Stats(data.data.covid19Stats)
        setLastChecked(data.data.lastChecked)
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  })

  return (
    <div className="App">
      <div style={styles.banner}>
        <div style={styles.imageContainer}>
          <img src={CovidImage} alt="COVID19" style={styles.covid} />
        </div>
        <div style={styles.textContainer}>
          <h1>Corona Virus Top 10 Stats</h1>
          <p>update at: {lastChecked}</p>
          <p>data points: {covid19Stats.length}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
          <Graph covid19Stats={covid19Stats} />
        </div>
        <p style={styles.column}>
          This API uses publicly available data about current confirmed cases,
          deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled
          by Johns Hopkins University. Accepts: country as filter parameter,
          otherwise returns all stats. Country name must match exactly with what
          is in the data (URL encoded spaces and punctuation) For some reason
          RapidAPI counts 304 "Not Modified" responses as "errors". This is the
          reason for the high "error count" of this API.
          <a href="https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/details">
            More information on this API can be found here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

const styles = {
  row: {
    display: "flex",
    margin: "50px"
  },
  column: {
    flex: "50%"
  },
  banner: {
    width: "100%",
    height: "190px",
    backgroundColor: "#3a82c1",
    display: "relative",
  },
  covid: {
    width: "100%",
    objectFit: "cover"
  },
  imageContainer: {
    position: "absolute",
    float: "left",
    left: "30px",
    top: "-40px",
    width: "400px",
    height: "230px",
    overflow: "hidden",

  },
  textContainer: {
    zPostion: "5",
    position: "absolute",
    width: "50%",
    color: "white",
    display: "inline-block",
    left: "25%",
    right: "25%"
  }
};
