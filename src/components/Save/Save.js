import React from "react";
import Dropdown from "../Dropdown";
import InputName from "../InputName";
import styles from "./styles.module.scss";

function Save(props) {
  // --> Destructuring to attempt making code easier to read
  const { formState, profiles, dispatch, input } = props;
  const { showForm, profile, newName } = formState;

  // --> "Methods"
  const submitLink = e => {
    e.preventDefault();
    // Save Link
    dispatch({ type: "CLEAR_NAME" });
    dispatch({ type: "HIDE_SAVE" });
  };
  const clearClicks = target => {
    if (!target.name && !target.parentNode.name) {
      // Clear menus if the click wasn't on dd button or
      // its parent isn't a dd button
      dispatch({ type: "CLEAR_CLICKS" });
    }
  };

  // --> Extracting logic out of the return
  let appClassName = `${styles.App}`;
  if (showForm !== null) {
    // showForm will initialize as null to avoid animating
    // on load.  Once the user clicks "Save", the value will
    // either be true or false and thus appClassName receives
    // a show/hide class
    appClassName += ` ${showForm ? styles.show : styles.hide}`;
  }
  const existingScrollData = profile ? profiles[profile].saves : [];

  return (
    <div className={appClassName} onClick={e => clearClicks(e.target)}>
      <h2>Save Link</h2>
      <i
        onClick={() => dispatch({ type: "TOGGLE_SAVE_FORM" })}
        className={`${styles.close} fas fa-times`}
      />
      <form onSubmit={submitLink}>
        <Dropdown
          title={"Profile"}
          scrollData={Object.keys(profiles)}
          formState={formState}
          dispatch={dispatch}
        />
        <Dropdown
          title={"Update Existing Link"}
          scrollData={existingScrollData}
          formState={formState}
          dispatch={dispatch}
        />
        <InputName name={newName} dispatch={dispatch} input={input} />
        <button className={styles.submit} type="submit">
          Save Link
        </button>
      </form>
    </div>
  );
}

export default Save;
