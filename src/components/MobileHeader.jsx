import React, {useState } from "react";
import CovidImage from "../images/covid.png";
import BodyText from "./bodyText";

function RenderHeader() {
  const [showText, setShowText] = useState(false);
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
      <div style={styles.banner}>
        <div style={styles.bannerTextContainer}>
          <div style={styles.header}>COVID-19 Cases by Country</div>
          <h3 onClick={toggleText} style={styles.moreInfo}>
            Data provided by Johns Hopkins University
          </h3>
        </div>
        {showText && <BodyText fontColor={"white"}/>}
        {showText ? (
          <button onClick={toggleText}>Collapse Details</button>
        ) : null}
      </div>
  );
}

export default RenderHeader;

const styles = {
  banner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5099d1",
    display: "absolute",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `url(${CovidImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "55%",
    backgroundPosition: "-33% 25%"
  },
  header: {
    padding: "5",
    fontSize: "37px"
  },
  moreInfo: {
    textDecoration: "underline",
    fontSize: "14px"
  },
  bannerTextContainer: {
    zPostion: "5",
    position: "relative",
    color: "white",
    height: "148px",
    margin: "auto",
    textAlign: "center",
    top: "20px"
  },
  button: {
    zPosition: "15"
  }
};
