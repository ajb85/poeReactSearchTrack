import React from "react";
import styles from "./styles.js";

function InputName({ input, name, dispatch }) {
  return (
    <div className="inputBox">
      <p>Save as Name: </p>
      <input
        ref={input}
        type="text"
        value={name}
        onChange={e => dispatch({ type: "NEW_NAME", payload: e.target.value })}
      />
    </div>
  );
}

export default InputName;
