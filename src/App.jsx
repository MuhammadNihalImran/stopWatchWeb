import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/scss/bootstrap";
// import * as bootstrap from "bootstrap";
import TimerComponent from "./Timerset/TimerComponent";

const App = () => {
  return (
    <div className="d-flex justify-content-center bg-primary vh-100 align-items-center">
      <TimerComponent />
    </div>
  );
};

export default App;
