import React, {useState, useEffect} from "react";
import BodyText from "./bodyText";
import Graph from "./Graph";

const MobileView = ({ className}) => {
    const [covid19Stats, setCovid19Stats] = useState([]);
    const [lastChecked, setLastChecked] = useState("");

    useEffect(() => {
      fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "99eeb5b743msh92f00d28fbdb1c6p119ecfjsnd0af0be55161"
        }
      })
        .then(response => response.json())
        .then(data => {
          setCovid19Stats(data.data.covid19Stats);
          setLastChecked(data.data.lastChecked);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  return (
    <div className={className}>
      <div style={styles.graphColumn}>
        <Graph covid19Stats={covid19Stats} />
      </div>
      <div style={styles.bodyText}>
        <BodyText />
      </div>
    </div>
  );
};

export default MobileView;

const styles = {
  body: {
    height: "500px",
    width: "100%",
    display: "inline-block",
    position: "relative",
    paddingTop: "50px",
    maxHeight: "750px",
    margin: "50px"
  },
  graphColumn: {
    width: "50%",
    height: "50%",
    display: "inline-block",
    position: "relative",
    maxWidth: "750px"
  },
  bodyText: {
    width: "450px",
    height: "300px",
    display: "inline-block",
    position: "relative"
  }
};
