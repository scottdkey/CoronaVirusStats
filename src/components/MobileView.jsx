import React from "react";
import Graph from "./Graph";
import MobileHeader from './MobileHeader'

const MobileView = ({ className, covid19Stats }) => {
  return (
    <div className={className} style={styles.body}>
      <MobileHeader />
      <div style={styles.statsContainer}>
        <Graph covid19Stats={covid19Stats} />
      </div>
    </div>
  );
};

export default MobileView;

const styles = {
  body: {
    height: "100%",
    maxHeight: "750px"
  },
  statsContainer: {
    height: "500px",
    margin: "5px",
    marginTop: "80px"
    // display: "inline-block"
  },
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
    height: "100%"
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
