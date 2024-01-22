"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "A propos de nous",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Administrateur", path: "/admin" }} />}
            {session.user?.image ?
              <Image src={session.user.image} width={30} height={30} className={styles.img} />
              :
              <Image src="/noavatar.png" width={30} height={30} className={styles.img} />
            }
            <form action={handleLogout}>
              <button className={styles.logout}>Déconnexion</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Se connecter", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
