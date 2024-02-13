import React, { Fragment } from "react";
import "./shape.css";

function List({ children, items,}) {
  const child = items.map(
    (el) =>
      React.cloneElement(children, {
        item: el,
        key: el.id,
      })
    // React.cloneElement.map(children, (child) => {
    //   return
    // });
  );

  return <div className={children.type.name}>{child}</div>;
}

export default List;
