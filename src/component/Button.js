import React from "react";

function Button({ color, backgroundColor, customClass, children, callBackfn }) {
  return (
    <button
      className={`${customClass ? "button" + customClass : "button"}`}
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={callBackfn}
    >
      {children}
    </button>
  );
}

export default Button;
