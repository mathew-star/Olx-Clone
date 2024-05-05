export function calculateDate(date) {
  function isSameDay(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  // Function to format the date
  const today = new Date();
  const curr = new Date(date);
  if (isSameDay(curr, today)) {
    return "Today";
  } else {
    const options = { month: "short", day: "numeric" };
    return curr.toLocaleDateString("en-US", options);
  }
}
