import "../css/DateInput.css";
import { Form } from "react-bootstrap";

function DateInput({ label, placeholder }) {
  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Label>{label.toUpperCase()}</Form.Label>
      <Form.Control required type="text" placeholder={placeholder} />
      <Form.Control.Feedback type="invalid">
        This field is required
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default DateInput;
