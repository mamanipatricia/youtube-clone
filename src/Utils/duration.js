export function getDuration(duration) {
  let time = "";
  if (duration) {
    let pattern = /((\d*)D)?T?((\d*)H)?((\d*)M)?((\d*)S)?$/gi;
    let [, , d, , h, , m, , s] = pattern.exec(duration);

    if (d) {
      h = +d * 24 + +(h || 0);
    }
    if (h) {
      m = (m || "").padStart(2, "0");
    } else {
      if (!m) {
        m = "0";
      }
    }
    s = (s || "").padStart(2, "0");
    time = [h, m, s].filter((item) => Boolean(item)).join(":");
  }
  return time;
}
