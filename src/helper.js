export default function calculateAge(day, month, year) {
  const date = new Date();
  const tempDate = new Date(year, month, day);

  let years = date.getFullYear() - tempDate.getFullYear();
  let months = date.getMonth() - tempDate.getMonth();
  let days = date.getDate() - tempDate.getDate();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (days < 0) {
    date.setDate(0);
    days += date.getDate();
  } else months += 1;

  return { days, months, years };
}
