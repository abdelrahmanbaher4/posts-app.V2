import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { HomeIcon, HeartIcon } from "../../assets/icons";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.icon} href="/posts">
        <HomeIcon fill="none" />
      </Link>
      <Link className={styles.icon} href="/favorites">
        <HeartIcon fill="white" width={1.5} />
      </Link>
    </div>
  );
};

export default Navbar;
