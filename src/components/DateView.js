import "../css/DateView.css";
import { Form } from "react-bootstrap";

function DateView({ label, number }) {
  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Control
        className="poppins-bold"
        value={number != -1 ? number : "- -"}
        type="text"
      />
      <Form.Label className="poppins-extrabold-italic">{label}</Form.Label>
    </Form.Group>
  );
}

export default DateView;
