import React from "react";
import styles from "./styles.module.scss";

function ScrollMenu(props) {
  const visibleStyle = props.visible ? "" : styles.inactive;
  return (
    <div style={{ position: "relative" }}>
      <div className={`${styles.scrollMenu} ${visibleStyle} `}>
        <div className={styles.arrow} />
        {props.list.map(item => (
          <p key={item.name}>{item.name ? item.name : item}</p>
        ))}
      </div>
    </div>
  );
}

export default ScrollMenu;
