import React, { useState } from "react";

export const initialFormState = {
  profile: "",
  existing: "",
  newName: "",
  clicks: { profile: false, existing: false },
  showForm: null
};

export function formReducer(state, action) {
  switch (action.type) {
    case "NEW_NAME":
      return { ...state, newName: action.payload };
    case "CLEAR_NAME":
      return { ...state, newName: "" };
    case "SELECT_PROFILE":
      return { ...state, profile: action.payload };
    case "SELECT_LINK":
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
