"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {

  const { title, desc, slug, img, userId } = Object.fromEntries(formData);
  console.log(img)
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      img,
      slug,
      userId,
    });

    await newPost.save();
    console.log("sauvegarde dans la base de donnée");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Une erreur s'est produite!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("suppresion de la base de donnée");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Une erreur s'est produite!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("Enregistrement dans la base de donnée");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Une erreur s'est produite !" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("suppresion de la base de donnée");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Une erreur s'est produite !" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Le mot de passe ne correspond pas" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Le nom d'utilisateur existe déjà" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("Enregistrer dans la base de donnée");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Une erreur s'est produite!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Utilisateur ou mot de passe invalide" };
    }
    throw err;
  }
};
