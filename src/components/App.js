import "../css/App.css";
import DateInput from "../components/DateInput";
import { Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form className="inputs poppins-bold">
          <DateInput label="Day" placeholder="DD" />
          <DateInput label="Month" placeholder="MM" />
          <DateInput label="Year" placeholder="YYYY" />
        </Form>
      </header>
    </div>
  );
}

export default App;
