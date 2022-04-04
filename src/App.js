import "./App.css";
import React, { useState } from "react";
import Canva from "./Canva";
import Form from "./Form";

function App() {
  let [points, setPoints] = useState({
    A: { x: 250, y: 250 },
    B: { x: 350, y: 150 },
    C: { x: 350, y: 250 },
  });

  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [sx, setSx] = useState(0);
  const [sy, setSy] = useState(0);
  const [angule, setAngule] = useState(0);

  const handleUpdateFromDad = (field, value) => {
    if (field === "tx") setTx(parseInt(value));
    if (field === "ty") setTy(parseInt(value));
    if (field === "sx") setSx(parseInt(value));
    if (field === "sy") setSy(parseInt(value));
    if (field === "angule") setAngule(parseInt(value));
  };

  const calculateTransformation = () => {
    console.log("yes");
    setPoints({
      A: { x: points.A.x + tx, y: 250 },
      B: { x: 350, y: 150 },
      C: { x: 350, y: 250 },
    });
    console.log(points);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Transformaciones bidimensionales</h1>
      <Form
        tx={tx}
        ty={ty}
        sx={sx}
        sy={sy}
        angule={angule}
        handleUpdateFromDad={handleUpdateFromDad}
        calculateTransformation={calculateTransformation}
      />
      <br></br>
      <Canva points={points} />
    </div>
  );
}

export default App;
