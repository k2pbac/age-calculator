export default function calculateAge(date) {
  const today = new Date();
  const tempDate = new Date(date.Year, date.Month, date.Day);

  let years = today.getFullYear() - tempDate.getFullYear();
  let months = today.getMonth() - tempDate.getMonth();
  let days = today.getDate() - tempDate.getDate();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (days < 0) {
    today.setDate(0);
    days += today.getDate();
  } else months += 1;

  return { days, months, years };
}
