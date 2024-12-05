import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.subTitle}>SURF NATION ACADEMY</div>
        <div className={styles.title}>
          IT`S WHERE BIG WAVE SURFERS NEED TO BE
        </div>
        <Button title="LET`S SURF"/>
      </div>
    </>
  );
};

export default Hero;
