import React, { useState, useEffect, useReducer } from "react";
import styles from "./styles.module.scss";
import Save from "../Save";
import HomeButtons from "../HomeButtons";
import { initialFormState, formReducer } from "./reducers/form.js";
const profiles = {
  Interrobang: {
    active: true,
    saves: [
      { name: "Inpulsa", link: "http://poe.trade/search/goaomaninausiw" },
      {
        name: "Flask Effect Belt",
        link: "http://poe.trade/search/nigahumesinina"
      },
      { name: "Boots", link: "http://poe.trade/search/sikoosihigohot" },
      { name: "+2 Ring", link: "http://poe.trade/search/utenorurarenan" },
      {
        name: "Purity Amulet",
        link: "http://poe.trade/search/euzuamarahahei"
      },
      { name: "+30% Gloves", link: "http://poe.trade/search/ohokahokakohiw" },
      { name: "RF Jewel", link: "http://poe.trade/search/nitounomionoko" },
      {
        name: "Watcher 1-Stat",
        link: "http://poe.trade/search/huramariteraga"
      },
      {
        name: "Corrupted Ahn's",
        link: "http://poe.trade/search/ioninariyotoni"
      },
      {
        name: "Purity of Ice 21",
        link: "http://poe.trade/search/utonosikikiwok"
      },
      { name: "RF Helm", link: "http://poe.trade/search/umkosisionahiz" }
    ]
  },
  Shamshire: {
    active: false,
    saves: [
      { name: "Lorem Ipsum", link: "http://poe.trade/search/goaomaninausiw" },
      { name: "Mehs", link: "http://poe.trade/search/goaomaninausiw" },
      { name: "Blah", link: "http://poe.trade/search/goaomaninausiw" }
    ]
  }
};

function Overlay() {
  // --> Ref to set autofocus on input when "save" is clicked
  let input = React.createRef();
  // Save Form state management
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  useEffect(() => {
    // CDM
    let active;
    for (let profile in profiles) {
      if (profiles[profile].active) {
        active = profile;
      }
    }
    dispatch({ type: "SELECT_PROFILE", payload: active });
  }, []);

  return (
    <React.Fragment>
      <HomeButtons
        showForm={formState.showForm}
        dispatch={dispatch}
        input={input}
      />
      <Save
        formState={formState}
        dispatch={dispatch}
        profiles={profiles}
        input={input}
      />
    </React.Fragment>
  );
}

export default Overlay;
