
import Image from "next/image";
import styles from "./page.module.css";
import Poke from "./components/pokedex.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <Poke/>
    </div>
    
    );
}
