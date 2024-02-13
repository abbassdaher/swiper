import React, { Fragment } from "react";
import "./shape.css";

function ShapeOne({ item }) {
  console.log(item);
  return (
    <div className="item ShapeOne">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
}

export default ShapeOne;
