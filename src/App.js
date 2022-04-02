import "./App.css";
import React from 'react';
import Matrix from "./Matrix";

function App() {
  React.useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(500, 250);
    ctx.lineTo(0, 250);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }, []);
  return (
    <>
      <h1>Canvas Test</h1>
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        style={{ border: "5px solid #d3d3d3" }}
      ></canvas>
      <Matrix/>
    </>
  );
}

export default App;
