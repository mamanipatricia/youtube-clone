import styles from "./Spinner.module.css";
export default function Spinner({ visible = true }) {
  return (
    <div
      className={`${styles.loader} ${!visible ? styles.loaderHidden : null}`}
    ></div>
  );
}
