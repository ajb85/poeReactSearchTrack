import React from "react";
//import styles from "./styles.module.scss";

//import { SwitchButton, NewButton, SaveButton } from "./styles.js";

function HomeButtons(props) {
  // --> Set focus on new name input when save button is clicked
  const focusInput = () => props.input.current.focus();

  // --> Methods
  const toggleForm = () => {
    if (!props.showForm) {
      // Only focus on form if the previous state was hiding the form
      focusInput();
    }
    props.dispatch({ type: "TOGGLE_SAVE_FORM" });
  };
  const styles = `
    .buttons {
      background-color: #575456;
      color: #90ada5;
      border: 1px solid #cb8371;
      position: fixed;
      right: 2px;
      z-index: 1000;
      font-size: 18px;
      width: 60px;
    }

    .buttons:hover {
      background-color: #302e2f;
    }

    .buttons:active {
      transform: translateY(1px);
      outline-color: #90ada5;
    }

    .switch {
      top: 5%;
    }

    .new {
      top: 11%;
    }

    .save {
      top: 17%;
    }`;

  return (
    <React.Fragment>
      <style type="text/css">{styles}</style>
      <button className={`buttons switch`} type="button">
        <i className="fas fa-exchange-alt" />
      </button>
      <button className={`buttons new`} type="button">
        New
      </button>
      <button
        className={`buttons save`}
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

/*

<React.Fragment>
  <SwitchButton type="button">
    <i className="fas fa-exchange-alt" />
  </SwitchButton>
  <NewButton type="button">New</NewButton>
  <SaveButton type="button" onClick={() => toggleForm()}>
    Save
  </SaveButton>
</React.Fragment>

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
*/
