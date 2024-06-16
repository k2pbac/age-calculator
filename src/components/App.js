import "../css/App.css";
import DateInput from "../components/DateInput";
import { Button, Form, Image } from "react-bootstrap";
import DateView from "./DateView";
import calculateAge from "../helper";
import { useState } from "react";

function App() {
  const [day, setDay] = useState(-1);
  const [month, setMonth] = useState(-1);
  const [year, setYear] = useState(-1);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const day = e.target[0].value;
    const month = e.target[1].value;
    const year = e.target[2].value;

    if (day !== "" && day >= 1 && day <= 31) {
      if (month !== "" && month >= 1 && month <= 12) {
        if (
          year !== "" &&
          year <= new Date().getFullYear() &&
          new Date(year, month, day) < new Date()
        ) {
          const { days, months, years } = calculateAge(
            e.target[0].value,
            e.target[1].value,
            e.target[2].value
          );
          setDay(days);
          setMonth(months);
          setYear(years);
        }
      }
    }
    setValidated(true);
  };

  return (
    <div className="App">
      <Form
        noValidate
        validated={validated}
        id="input-form"
        className="inputs poppins-bold"
        onSubmit={handleSubmit}
      >
        <div className="inputs-container">
          <DateInput label="Day" placeholder="DD" />
          <DateInput label="Month" placeholder="MM" />
          <DateInput label="Year" placeholder="YYYY" />
        </div>
        <div className="arrow-container">
          <hr></hr>
          <Image
            className="arrow"
            src="/images/icon-arrow.svg"
            alt="arrow"
            roundedCircle
          />
          <Button type="submit" className="rounded-circle"></Button>
        </div>
      </Form>
      <div className="date-views">
        <DateView number={year} label="years" />
        <DateView number={month} label="months" />
        <DateView number={day} label="days" />
      </div>
    </div>
  );
}

export default App;
