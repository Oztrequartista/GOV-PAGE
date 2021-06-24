import React from "react";
import { Form, Button } from "react-bootstrap";

const FormFunc = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img src="/assets/GH.png" style={{ width: "30" }} alt="GH" />
        <span style={{ marginLeft: "10px", color: "rgb(95, 105, 122)" }}>
          +233
        </span>
      </div>
    </>
  );
};

export default FormFunc;
