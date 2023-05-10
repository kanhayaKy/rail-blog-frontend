export default function formatDate(date_str) {
  if (isNaN(Date.parse(date_str))) {
    return "";
  }
  const date = new Date(date_str);

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const now = new Date();

  // Today's date
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return `Today, ${new Intl.DateTimeFormat("en-US", options).format(date)}`;
  }

  // Other dates
  return `${new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(date)}, ${new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date)}`;
}
