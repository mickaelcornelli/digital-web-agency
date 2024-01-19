"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Ajouter un nouvel utilisateur</h1>
      <input type="text" name="username" placeholder="Nom d'utilisateur" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Mot de passe" />
      <input type="text" name="img" placeholder="Image" />
      <select name="isAdmin">
        <option value="false">Administrateur ?</option>
        <option value="false">Non</option>
        <option value="true">Oui</option>
      </select>
      <button>Ajouter</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
