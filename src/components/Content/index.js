import React, {useState, useEffect} from 'react'
import ResponsiveLayout from "../ResponsiveLayout"
import MobileView from '../MobileView'
import DesktopView from '../DesktopView'

const Content = () => {
    const [covid19Stats, setCovid19Stats] = useState([]);
    // const [lastChecked, setLastChecked] = useState("");

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
          // setLastChecked(data.data.lastChecked);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

return (
  <ResponsiveLayout
    breakPoint={800}
    renderDesktop={() => (
      <DesktopView className="desktop" covid19Stats={covid19Stats} />
    )}
    renderMobile={() => (
      <MobileView className="mobile" covid19Stats={covid19Stats} />
    )}
  />
);
}
export default Content