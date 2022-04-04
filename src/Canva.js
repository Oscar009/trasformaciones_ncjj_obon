import React from "react";

const Canva = (props) => {
  const { points } = props;

  React.useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(500, 250);
    ctx.lineTo(0, 250);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(points.A.x, points.A.y);
    ctx.lineTo(points.B.x, points.B.y);
    ctx.moveTo(points.B.x, points.B.y);
    ctx.lineTo(points.C.x, points.C.y);
    ctx.moveTo(points.C.x, points.C.y);
    ctx.lineTo(points.A.x, points.A.y);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }, [points.A.x, points.A.y, points.B.x, points.B.y, points.C.x, points.C.y]);

  return (
    <div>
      <p>Hijo:{points.A.x}</p>
      <canvas
        id="myCanvas"
        width="500"
        height="500"
        style={{ border: "5px solid #d3d3d3" }}
      ></canvas>
    </div>
  );
};

export default Canva;
