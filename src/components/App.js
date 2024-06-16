import "../css/App.css";
import DateInput from "../components/DateInput";
import { Button, Form, Image } from "react-bootstrap";
import DateView from "./DateView";
import calculateAge from "../helper";
import { useState } from "react";
import { useFormik } from "formik";

function App() {
  const [age, setAge] = useState({ days: "", months: "", years: "" });

  const validate = (values) => {
    const errors = {};
    const date = new Date();
    const tempDate = new Date(values.Year, values.Month, values.Day);
    tempDate.setDate(0);

    if (!values.Day) {
      errors.Day = "This field is required";
    } else if (values.Day < 1 || values.Day > 31) {
      errors.Day = "Must be a valid day";
    }
    if (values.Month && values.Month >= 1 && values.Month <= 12) {
      if (values.Day && values.Day > tempDate.getDate()) {
        errors.Day = "Must be a valid date";
      }
    }
    if (!values.Month) {
      errors.Month = "This field is required";
    } else if (values.Month < 1 || values.Month > 12) {
      errors.Month = "Must be a valid month";
    }
    if (!values.Year) {
      errors.Year = "This field is required";
    } else if (
      values.Year > date.getFullYear() ||
      new Date(values.Year, values.Month, values.Day) > date
    ) {
      errors.Year = "Must be in the past";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Day: "",
      Month: "",
      Year: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: (values) => {
      setAge(calculateAge(values));
    },
  });

  return (
    <div className="App">
      <Form
        noValidate
        id="input-form"
        className="inputs poppins-bold"
        onSubmit={formik.handleSubmit}
      >
        <div className="inputs-container">
          <DateInput
            value={formik.values.Day}
            label="Day"
            placeholder="DD"
            onChange={formik.handleChange}
            error={formik.errors.Day ? <div>{formik.errors.Day}</div> : null}
          />
          <DateInput
            value={formik.values.Month}
            label="Month"
            placeholder="MM"
            onChange={formik.handleChange}
            error={
              formik.errors.Month ? <div>{formik.errors.Month}</div> : null
            }
          />
          <DateInput
            value={formik.values.Year}
            label="Year"
            placeholder="YYYY"
            onChange={formik.handleChange}
            error={formik.errors.Year ? <div>{formik.errors.Year}</div> : null}
          />
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
        <DateView number={age.years} label="years" />
        <DateView number={age.months} label="months" />
        <DateView number={age.days} label="days" />
      </div>
    </div>
  );
}

export default App;
