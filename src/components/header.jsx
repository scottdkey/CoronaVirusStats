import React from 'react'
import CovidImage from "../images/covid.png";


const renderHeader = () =>{

  return(
        <>
        <div style={styles.banner}>
          <div style={styles.bannerTextContainer}>
            <h1 style={styles.header}>COVID-19 Cases by Country</h1>
            <p>Data provided by Johns Hopkins University</p>
            <div style={styles.imageContainer}>
              <img src={CovidImage} alt="COVID19" style={styles.covid} />
            </div>
          </div>
        </div>
        </>
        )
}

export default renderHeader

const styles = {
  banner: {
    width: "100%",
    height: "150px",
    backgroundColor: "#3a82c1",
    display: "relative",
    overflow: "hidden",
    textAlign: "center"
  },
  header: {
    display: "inline-block",
    width: "100%",
    padding: "50px",
  },

  covid: {
    width: "100%",
    objectFit: "cover"
  },
  imageContainer: {
    position: "absolute",
    left: "-200px",
    top: "-40px",
    width: "500px",
    height: "100%"
  },
  bannerTextContainer: {
    zPostion: "5",
    position: "relative",
    width: "50%",
    color: "white",
    display: "inline-block"
  }
};