import styles from "./about.module.css";

export const metadata = {
  title: "A propos de l'agence",
  description: "Nous sommes une équipe passionnée de développeurs, de designers et de stratèges numériques, prêts à relever les défis les plus complexes. Forts de nombreuses années d'expérience, nous maîtrisons les dernières technologies et les meilleures pratiques pour offrir des solutions numériques de qualité supérieure.",
};


const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>A propos de l'agence</h2>
        <h1 className={styles.title}>
          Nous nous engageons à transformer vos idées en réalité numérique.
        </h1>
        <p className={styles.desc}>
          Nous sommes une équipe passionnée de développeurs, de designers et de stratèges numériques, prêts à relever les défis les plus complexes. Forts de nombreuses années d'expérience, nous maîtrisons les dernières technologies et les meilleures pratiques pour offrir des solutions numériques de qualité supérieure.
        </p>
        <p className={styles.desc}>
          <strong>Développement d'applications mobiles :</strong> De la conception initiale à la publication sur les principales plateformes, nous créons des applications mobiles performantes qui répondent aux besoins de votre public cible.
        </p>
        <p className={styles.desc}>
          <strong>Conception de sites web :</strong> Nous concevons des sites web modernes, conviviaux et esthétiques qui vous aident à attirer, convertir et fidéliser vos visiteurs.
        </p>
        <p className={styles.desc}>
          <strong>Stratégie numérique :</strong> Nous élaborons des stratégies numériques sur mesure pour augmenter votre visibilité en ligne, stimuler la croissance de votre entreprise et maximiser votre retour sur investissement.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Collaboration de marques</p>
          </div>
          <div className={styles.box}>
            <h1>20+</h1>
            <p>Années d'expériences</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Salariés</p>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay className={styles.video}>
          <source src="/team_work.mp4" />
        </video>
        <video autoPlay className={styles.video}>
          <source src="/team_work2.mp4" />
        </video>
      </div>
    </div>
  );
};

export default AboutPage;
