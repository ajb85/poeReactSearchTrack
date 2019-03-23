import React from "react";
import styles from "./styles.module.scss";
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

  return (
    <div className={styles.dropdown}>
      <p>{title}: </p>
      <button
        name="dropdown"
        type="button"
        onClick={() => dispatch({ type: click })}
      >
        {activeItem}
        <i
          onClick={() => dispatch({ type: click })}
          className="fas fa-caret-down"
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
