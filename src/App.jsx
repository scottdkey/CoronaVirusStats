import React from "react";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
// import "bulma/css/bulma.css";
import Content from './components/Content'
import D3Test from './components/d3Graph'


function App() {

  return (
    <WindowDimensionsProvider>
      <div>
        <Content />
        <D3Test />
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;

