import React from 'react'
import CovidImage from "../images/covid.png";


const DesktopHeader =()=> {


  return(
    <div style={styles.banner}>
      <div style={styles.bannerTextContainer}>
        <h1 style={styles.header}>COVID-19 Cases by Country</h1>
        <p style={styles.subScript}>Data provided by Johns Hopkins University</p>
      </div>
    </div>
  );
}
export default DesktopHeader

const styles = {
  banner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5099d1",
    display: "relative",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `url(${CovidImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "20%",
    backgroundPosition: "33% 25%"
  },
  header: {
    padding: "2",
    fontSize: "37px"
  },
  bannerTextContainer: {
    position: "relative",
    color: "white",
    display: "inline-block",
    height: "145px"
  },
  subScript: {
    fontWeight: "light",
    position: "relative",
    bottom: '28px',
    fontSize:'16px'
  }
};