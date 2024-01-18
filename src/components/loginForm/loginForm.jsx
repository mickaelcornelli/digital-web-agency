"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Nom d'utilisateur" name="username" />
      <input type="password" placeholder="Mot de passe" name="password" />
      <button>Se connecter</button>
      {state?.error}
      <Link href="/register">
        {"Vous n'avez pas de compte?"} <b>S'enregistrer</b>
      </Link>
    </form>
  );
};

export default LoginForm;
