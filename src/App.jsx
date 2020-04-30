import React from "react";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
// import "bulma/css/bulma.css";
import Content from './components/Content'


function App() {

  return (
    <WindowDimensionsProvider>
      <div>
        <Content />
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;

