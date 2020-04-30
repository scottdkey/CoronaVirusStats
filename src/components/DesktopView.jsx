import React from "react";
import BodyText from "./bodyText";
import Graph from "./Graph";
import DesktopHeader from './DesktopHeader'



const DesktopView = ({ className, covid19Stats }) => (
  <div className={className}>
    <DesktopHeader />
    <div style={styles.container}>
      <div style={styles.graphColumn}>
        <Graph covid19Stats={covid19Stats} />
      </div>
      <div style={styles.bodyText}>
        <BodyText />
      </div>
    </div>
  </div>
);

export default DesktopView

const styles = {
  container: {
    height: "100%",
    width: "75%",
    display: "flex",
    position: "relative",
    maxHeight: "750px",
    paddingTop: "40px",
    margin: "auto"
  },
  graphColumn: {
    width: "100%",
    height: "500px",
    position: "relative",
    maxWidth: "750px",
    display: "inline-block"
  },
  bodyText: {
    width: "75",
    height: "100%",
    display: "inline-block",
    position: "relative",
    paddingLeft: "48px"
    // bottom: "150px"
  },

};