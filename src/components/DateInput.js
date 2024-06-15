import "../css/DateInput.css";
import { Form } from "react-bootstrap";

function DateInput({ label, placeholder }) {
  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="email" placeholder={placeholder} />
    </Form.Group>
  );
}

export default DateInput;
