import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        Digital Web Agency © Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;
