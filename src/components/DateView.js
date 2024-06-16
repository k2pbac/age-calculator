import "../css/DateView.css";

function DateView({ label, number }) {
  return (
    <div>
      <p className="date-value poppins-bold">{number !== -1 ? number : "--"}</p>
      <p className="date-name poppins-extrabold-italic">{label} </p>
    </div>
  );
}

export default DateView;
