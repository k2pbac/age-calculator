import "../css/App.css";
import DateInput from "../components/DateInput";
import { Form, Image } from "react-bootstrap";
import DateView from "./DateView";

function App() {
  return (
    <div className="App">
      <Form className="inputs poppins-bold">
        <DateInput label="Day" placeholder="DD" />
        <DateInput label="Month" placeholder="MM" />
        <DateInput label="Year" placeholder="YYYY" />
      </Form>
      <div className="arrow-container">
        <hr></hr>
        <Image
          className="arrow"
          src="/images/icon-arrow.svg"
          alt="arrow"
          roundedCircle
        />
      </div>
      <div className="date-views">
        <DateView number={-1} label="years" />
        <DateView number={-1} label="months" />
        <DateView number={-1} label="days" />
      </div>
    </div>
  );
}

export default App;
