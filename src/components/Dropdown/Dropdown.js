import React from "react";
import styles from "./styles.js";

import ScrollMenu from "../ScrollMenu";

function Dropdown(props) {
  // --> Destructuring
  const { title, scrollData, fullState } = props;
  const [overlay, dispatch] = fullState;

  // --> Setup conditional rendering based on context
  let visible, click, activeItem, actionType;
  if (title === "Profile") {
    visible = overlay.clicks.profile;
    click = "PROFILE_CLICK";
    activeItem = overlay.profile;
    actionType = "SELECT_PROFILE";
  } else {
    visible = overlay.clicks.existing;
    click = "EXISTING_CLICK";
    activeItem = overlay.existing;
    actionType = "SELECT_EXISTING";
  }

  const arrowRotation = visible ? "rotated" : "";

  return (
    <div className="dropdown">
      <style>{styles}</style>
      <p>{title}: </p>
      <button
        name="dropdown"
        type="button"
        onClick={() => dispatch({ type: click })}
      >
        {activeItem}
        <div className="whiteSpace" />
        <i
          onClick={() => dispatch({ type: click })}
          className={`${arrowRotation} fas fa-caret-down`}
        />
      </button>
      <ScrollMenu
        visible={visible}
        list={scrollData}
        dispatch={dispatch}
        actionType={actionType}
      />
    </div>
  );
}

export default Dropdown;
