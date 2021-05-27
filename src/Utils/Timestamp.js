export default function Timestamp({ publishedAt }) {
  let dateFormat = "";
  if (publishedAt) {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const date = new Date(publishedAt);
    dateFormat = new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return dateFormat;
}
