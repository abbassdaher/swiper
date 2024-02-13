import React from "react";
import { cloneElement } from "react";

function ButtonGroup({ children }) {
  const callBackfn = () => {
    console.log("clicked");
  };

  
  const clonedElement = React.Children.map(children, (child) => {
    const text = child.props.children + " ?";
    return React.cloneElement(
        child,
      {
        color: "red",
        backgroundColor: "white",
        customClass: "group",
        callBackfn,
      },
      text
    );
  });

  return <div>{clonedElement}</div>;
}

export default ButtonGroup;
