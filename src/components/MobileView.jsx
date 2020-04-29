import React from "react";
import BodyText from "./bodyText";
import Graph from "./Graph";

const MobileView = ({ className, covid19Stats }) => {
  return (
    <div className={className} style={styles.body}>
      <div style={styles.graphColumn}>
        <Graph covid19Stats={covid19Stats}/>
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
