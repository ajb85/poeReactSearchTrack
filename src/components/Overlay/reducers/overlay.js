import React, { useState } from "react";

export const initialState = {
  profile: "",
  existing: "",
  newName: "",
  clicks: { profile: false, existing: false },
  showForm: null,
  profiles: {
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
        { name: "RF Helm", link: "http://poe.trade/search/umkosisionahiz" },
        { name: "Lorem Ipsum", link: "http://poe.trade/search/goaomaninausiw" }
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
  }
};

export function formReducer(state, action) {
  switch (action.type) {
    case "NEW_NAME":
      return { ...state, newName: action.payload };
    case "CLEAR_NAME":
      return { ...state, newName: "" };
    case "SELECT_PROFILE":
      return { ...state, profile: action.payload, existing: "" };
    case "SELECT_EXISTING":
      return { ...state, existing: action.payload };
    case "PROFILE_CLICK":
      return {
        ...state,
        clicks: { profile: !state.clicks.profile, existing: false }
      };
    case "EXISTING_CLICK":
      return {
        ...state,
        clicks: { profile: false, existing: !state.clicks.existing }
      };
    case "CLEAR_CLICKS":
      return { ...state, clicks: { profile: false, existing: false } };
    case "TOGGLE_SAVE_FORM":
      return {
        ...state,
        showForm: !state.showForm,
        clicks: { profile: false, existing: false }
      };

    default:
      return state;
  }
}
