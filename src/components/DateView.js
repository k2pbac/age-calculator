import "../css/DateView.css";

function DateView({ label, number }) {
  return (
    <div>
      {number !== "" ? (
        <p className="date-value poppins-bold"> {number} </p>
      ) : (
        <p className="date-value poppins-bold empty-date">--</p>
      )}
      <p className="date-name poppins-extrabold-italic">{label} </p>
    </div>
  );
}

export default DateView;
