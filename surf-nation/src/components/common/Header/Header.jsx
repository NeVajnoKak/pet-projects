import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Link to="/lessons">LESSONS</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/shop">SHOP</Link>
    </header>
  );
};

export default Header;
