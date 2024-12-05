import React from "react";
import styles from "./Image.module.css";

const Image = (props) => {
  return (
    <>
    <div>
      <img src={props.image} />
      <div className={styles.blackFill}></div>
      </div>
    </>
  );
};

export default Image;
