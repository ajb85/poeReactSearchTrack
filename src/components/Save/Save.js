import React from "react";
import Dropdown from "../Dropdown";
import InputName from "../InputName";
import styles from "./styles.js";
import searchDOM from "dotTradeDOMLookups/saveLink.js";

function Save(props) {
  // --> Destructuring to (hopefully) make code easier to read
  const { fullState, input } = props;
  const [overlay, dispatch] = fullState;
  const { showForm, profile, newName, profiles } = overlay;

  // --> "Methods"
  const submitLink = e => {
    e.preventDefault();
    // ********* Save Link to chrome here
    searchDOM();
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

  // --> Extracting logic out of the render() return
  let appClassName = `saveWindow`;
  if (showForm !== null) {
    // showForm will initialize as null to avoid animating
    // on load.  Once the user clicks "Save", the value will
    // either be true or false and thus appClassName receives
    // a show/hide class
    appClassName += showForm ? ` show` : ` hide`;
  }
  const activeProfileSavedLinks = profile ? profiles[profile].saves : [];
  const listOfProfiles = profiles ? Object.keys(profiles) : [];

  return (
    <div className={appClassName} onClick={e => clearClicks(e.target)}>
      <style>{styles}</style>
      <h2>Save Link</h2>
      <i
        onClick={() => dispatch({ type: "TOGGLE_SAVE_FORM" })}
        className={`close fas fa-times`}
      />
      <form onSubmit={e => submitLink(e)}>
        <Dropdown
          title={"Profile"}
          scrollData={listOfProfiles}
          fullState={fullState}
        />
        <Dropdown
          title={"Update Existing Link"}
          scrollData={activeProfileSavedLinks}
          fullState={fullState}
        />
        <InputName name={newName} dispatch={dispatch} input={input} />
        <button className="saveLink" type="submit">
          Save Link
        </button>
      </form>
    </div>
  );
}

export default Save;
