import React, { useEffect, useReducer } from "react";
import styles from "./styles.module.scss";
import Save from "../Save";
import HomeButtons from "../HomeButtons";
import { initialState, formReducer } from "./reducers/overlay.js";

function Overlay() {
  // --> Ref to set autofocus on input when "save" is clicked
  let input = React.createRef();
  // --> Save Form state management
  const fullState = useReducer(formReducer, initialState);
  const [overlay, dispatch] = fullState;

  useEffect(() => {
    // CDM
    for (let profile in overlay.profiles) {
      if (overlay.profiles[profile].active) {
        dispatch({
          type: "SELECT_PROFILE",
          payload: profile
        });
      }
    }
  }, []);

  return (
    <React.Fragment>
      <HomeButtons
        showForm={overlay.showForm}
        dispatch={dispatch}
        input={input}
      />
      <Save fullState={fullState} input={input} />
    </React.Fragment>
  );
}

export default Overlay;
