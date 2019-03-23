import React from "react";
import styles from "./styles.module.scss";

function ScrollMenu(props) {
  // --> Destructuring
  const { visible, list, dispatch, actionType } = props;

  // --> Extract logic from render()
  const visibleStyle = visible ? "" : styles.inactive;

  const dropdownList = list.map((item, i) => {
    const name = item.name ? item.name : item;
    return (
      <p
        className={styles.item}
        key={name}
        onClick={() => dispatch({ type: actionType, payload: name })}
      >
        {name}
      </p>
    );
  });
  return (
    <div style={{ position: "relative" }}>
      <div className={`${styles.container} ${visibleStyle}`}>
        <div className={`${styles.scrollMenu}`}>{dropdownList}</div>
        <div className={styles.arrow} />
      </div>
    </div>
  );
}

export default ScrollMenu;
