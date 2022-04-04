import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.handleUpdateFromDad(name, value);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          padding: "5px",
        }}
      >
        <h2>Rotación</h2>

        <h3>Ángulo</h3>
        <input type="number" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          padding: "5px",
        }}
      >
        <h2>Traslación</h2>

        <p>Tx:</p>
        <input type="number" onChange={handleChange} name="tx" value={props.tx || 0}/>

        <p>Ty:</p>
        <input type="number" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          padding: "5px",
        }}
      >
        <h2>Escala</h2>

        <p>Sx:</p>
        <input type="number" />

        <p>Sy:</p>
        <input type="number" />
      </div>

      <br></br>
      <button onClick={props.calculateTransformation}>Dibujar</button>
    </div>
  );
};

export default Form;
