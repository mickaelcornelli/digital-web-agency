// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Nous contacter",
  description: "Remplissez le formulaire pour prendre contact avec notre équipe",
};

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video autoPlay className={styles.video}>
          <source src="/contact.mp4" />
        </video>
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nom et prénom" />
          <input type="text" placeholder="Adresse email" />
          <input type="text" placeholder="Numéro de tél. (Optionnel)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
