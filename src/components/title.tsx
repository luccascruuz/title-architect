import { Inter } from "next/font/google";
import styles from "./title.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Title() {
  return (
    <div className={styles.contentTitle}>
      <h1 className={inter.className}>Title Architect</h1>
    </div>
  );
}
