const NUMBER_SCALES = ["", "K", "M", "B", "T", "C", "Q", "S"];

export function formatDigit(views, scaleIndex = 0) {
  if (views < 1000) {
    return `${
      Math.floor((Math.round((views + Number.EPSILON) * 100) / 100) * 10) / 10
    } ${NUMBER_SCALES[scaleIndex]}`.trim();
  }

  let dig = views / 1000;

  return formatDigit(dig, scaleIndex + 1);
}
