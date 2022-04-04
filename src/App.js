import "./App.css";
import React, { useState } from "react";
import Matrix from "./Matrix";
import Canva from "./Canva";
import Form from "./Form";

function App() {
  let [points, setPoints] = useState({
    A: { x: 250, y: 250 },
    B: { x: 350, y: 150 },
    C: { x: 350, y: 250 },
  });

  const [tx, setTx] = useState(0);

  const handleUpdateFromDad = (field, value) => {
    if (field === "tx") setTx(parseInt(value));
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
        handleUpdateFromDad={handleUpdateFromDad}
        calculateTransformation={calculateTransformation}
      />
      Padre:{tx}
      <br></br>
      <Canva points={points} />
      {/* <Matrix /> */}
    </div>
  );
}

export default App;
