import { useState } from "react";
import "../css/DateInput.css";
import { Form } from "react-bootstrap";

function DateInput({ label, placeholder, value, onChange, error }) {
  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Label>{label.toUpperCase()}</Form.Label>
      <Form.Control
        isInvalid={!!error}
        required
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value == "" ? "" : value}
      />

      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default DateInput;
