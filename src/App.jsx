import React from "react";
import Header from "./components/header";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import "bulma/css/bulma.css";
import Content from './components/Content'


function App() {

  return (
    <WindowDimensionsProvider>
      <div>
        <Header />
        <Content/>
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;

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
