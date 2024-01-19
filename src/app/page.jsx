import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Digital <br /> Web <br />Agency</h1>
        <p className={styles.desc}>
          Chez Digital Web Agency, nous nous engageons à transformer vos idées en réalité numérique. Que vous souhaitiez créer une application mobile innovante, concevoir un site web captivant, ou réinventer votre présence en ligne, nous sommes là pour vous aider à atteindre vos objectifs.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>En savoir plus</Link>
          <Link href="/contact" className={styles.buttonContact}>Nous contacter</Link>
        </div>
       
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
