import React, {useState } from "react";
import CovidImage from "../images/covid.png";
import BodyText from "./bodyText";
import Collapse from '@kunukn/react-collapse'
import "./MobileHeader.css"

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
          Data provided by Johns Hopkins University - click for more info
        </h3>
      </div>
      <Collapse className="collapse-css-transition" isOpen={showText}>
        <BodyText fontColor={"white"} />
        <div style={styles.buttonArea} className="text-area--button">
          {showText ? (
            <button style={styles.button} onClick={toggleText}>
              Collapse Details
            </button>
          ) : null}
        </div>
      </Collapse>
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
    top: "20px",
    marginBottom: "10px"
  },
  button: {
    zPosition: "15",
    height: "37px",
    width: "165px",
    borderRadius: "10px",
    color: "white",
    backgroundColor: "#95c5e8",
    fontSize: "17px",
    border: "none",
    webkitTextStrokeWidth: ".3px",
    webkitTextStrokeColor: "black"
  },
  buttonArea: {
    marginBottom: "10px",
    marginTop: "57px"
  },
  animatedTextArea: {
    transform: "translate"
  },
  openedStyle: {

    transition: "transform 500ms ease-in-out"
  },
  closedStyle: {
    maxHeight: "0px",
    transition: "height 2s"
  }
};
