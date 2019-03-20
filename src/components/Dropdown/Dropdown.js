import React from "react";
import styles from "./styles.module.scss";
import ScrollMenu from "../ScrollMenu";

function Dropdown(props) {
  // Setup conditional rendering based on context
  let visible, click, defaultText;
  if (props.title === "Profile") {
    visible = props.formState.clicks.profile;
    click = "PROFILE_CLICK";
    defaultText = props.formState.profile;
  } else {
    visible = props.formState.clicks.existing;
    click = "EXISTING_CLICK";
    defaultText = "";
  }
  return (
    <div className={styles.dropdown}>
      <p>{props.title}: </p>
      <button
        name="dropdown"
        type="button"
        onClick={() => props.dispatch({ type: click })}
      >
        {defaultText}
        <i
          onClick={() => props.dispatch({ type: click })}
          className="fas fa-caret-down"
        />
      </button>
      <ScrollMenu visible={visible} list={props.scrollData} />
    </div>
  );
}

export default Dropdown;
