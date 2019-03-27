import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import ShadowDOM from "react-shadow";

//import styles from "./styles.module.scss";
import reset from "css/reset.js";
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

    // fetch("https://use.fontawesome.com/releases/v5.8.1/css/all.css")
    //   .then(res => res.text())
    //   .then(data => setExtStyle(data))
    //   .catch(err => console.log(err));
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
    <div>
      <style>
        @import "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        screen;
      </style>
      <style>{reset}</style>
      <HomeButtons
        showForm={overlay.showForm}
        dispatch={dispatch}
        input={input}
      />
      <Save fullState={fullState} input={input} />
    </div>
  );
}

window.addEventListener("load", () => {
  let overlay = document.createElement("div");
  document.body.appendChild(overlay);
  loadFontAwesome(overlay);
  ReactDOM.render(
    <ShadowDOM>
      <div>
        <Overlay />
      </div>
    </ShadowDOM>,
    overlay
  );
});

function loadFontAwesome(overlay) {
  let style = document.createElement("style");

  let fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
  // This is a public key, don't get too excited
  fontAwesome.integrity =
    "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf";
  fontAwesome.crossOrigin = "anonymous";

  let head = document.head || document.documentElement.childNodes[0];
  head.appendChild(fontAwesome);
}

export default Overlay;
