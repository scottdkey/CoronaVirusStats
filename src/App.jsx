import React, {useEffect, useState} from 'react';
import './App.css';
// import Graph from './BarGraph'
import CovidImage from "./images/covid.png"
import Graph from './Graph'



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
        <div style={styles.bannerTextContainer}>
          <h1 style={styles.header}>COVID-19 Cases by Country</h1>
          <p>Data provided by Johns Hopkins University</p>
          <div style={styles.imageContainer}>
            <img src={CovidImage} alt="COVID19" style={styles.covid} />
          </div>
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.statsContainer}>
          <div style={styles.graphColumn}>
            <Graph covid19Stats={covid19Stats} />
          </div>
          <p style={styles.apiInfoColumn}>
            This API uses publicly available data about current confirmed cases,
            deaths, and recoveries of the COVID-19 virus AKA Coronavirus
            compiled by Johns Hopkins University. Accepts: country as filter
            parameter, otherwise returns all stats. Country name must match
            exactly with what is in the data (URL encoded spaces and
            punctuation) For some reason RapidAPI counts 304 "Not Modified"
            responses as "errors". This is the reason for the high "error count"
            of this API.
            <a href="https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/details">
              More information on this API can be found here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  statsContainer: {
    height: "100%",
    width: "100%",
    display: "inline-block",
    position: "relative",
    paddingTop: "50px",
    maxHeight: "750px"
  },
  graphColumn: {
    width: "50%",
    height: "500px",
    display: "inline-block",
    position: "absolute",
    left: "14px",
    top: "50px"
  },
  apiInfoColumn: {
    width: "450px",
    height: "300px",
    display: "inline-block",
    position: "absolute",
  },
  banner: {
    width: "100%",
    height: "145px",
    backgroundColor: "#3a82c1",
    display: "relative",
  },
  covid: {
    width: "100%",
    objectFit: "cover"
  },
  imageContainer: {
    position: "absolute",
    left: "20%",
    top: "-50px",
    width: "400px",
    height: "195px",
    overflow: "hidden",

  },
  bannerTextContainer: {
    zPostion: "5",
    position: "relative",
    width: "100%",
    color: "white",
    display: "inline-block",
  },
  header:{
    display: "inline-block",
    width: "100%"
  },
  body: {
    width: "100%",
    height: "100%"
  }
};
