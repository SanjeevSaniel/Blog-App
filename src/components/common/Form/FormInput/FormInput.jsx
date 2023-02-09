import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({ placeholder, type, controlId, label, onChange }) => {
  return (
    <React.Fragment>
      <Form.Group className="mb-3" controlId={controlId}>
        {/*<Form.Label>{label}</Form.Label>*/}
        <Form.Control
          style={{
            fontSize: "2rem",
            fontFamily: "sans-serif",
          }}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        ></Form.Control>
      </Form.Group>
    </React.Fragment>
  );
};

export default FormInput;
