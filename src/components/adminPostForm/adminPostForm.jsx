"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Créer un nouveau post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Titre" />
      <input type="text" name="slug" placeholder="Alias" />
      <input type="text" name="img" placeholder="Image" />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button>Ajouter</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
