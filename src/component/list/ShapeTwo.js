import React, { Fragment } from "react";
import "./shape.css";

function ShapeTwo({ item }) {
  return (
    <Fragment>
      <div className=" item ShapeTwo">
        <ul>
          <li>{item.name}</li>
          <li>{item.age}</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default ShapeTwo;
