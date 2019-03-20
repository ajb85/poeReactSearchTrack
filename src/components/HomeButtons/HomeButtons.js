import React from "react";
import styles from "./styles.module.scss";

function HomeButtons(props) {
  // Set focus on new name input when save button is clicked
  const focusInput = () => props.input.current.focus();
  return (
    <React.Fragment>
      <button className={`${styles.buttons} ${styles.switch}`} type="button">
        <i className="fas fa-exchange-alt" />
      </button>
      <button className={`${styles.buttons} ${styles.new}`} type="button">
        New
      </button>
      <button
        className={`${styles.buttons} ${styles.save}`}
        type="button"
        onClick={() => {
          if (!props.showForm) {
            // Only focus on form if the previous state was hiding the form
            focusInput();
          }
          props.dispatch({ type: "TOGGLE_SAVE_FORM" });
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
}

export default HomeButtons;
