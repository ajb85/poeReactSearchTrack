import React from "react";
import styles from "./styles.js";

function ScrollMenu(props) {
  // --> Destructuring
  const { visible, list, dispatch, actionType } = props;

  // --> Extract logic from render()
  const visibleStyle = visible ? "" : "inactive";

  const dropdownList = list.map((item, i) => {
    const name = item.name ? item.name : item;
    return (
      <p
        className="item"
        key={name}
        onClick={() => dispatch({ type: actionType, payload: name })}
      >
        {name}
      </p>
    );
  });
  return (
    <div style={{ position: "relative" }}>
      <style>{styles}</style>
      <div className={`container ${visibleStyle}`}>
        <div className="scrollMenu">{dropdownList}</div>
        <div className="arrow" />
      </div>
    </div>
  );
}

export default ScrollMenu;
