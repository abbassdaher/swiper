import React from "react";
import SwiperCarousel from "./component/SwiperCarousel/SwiperCarousel"
import ShapeOne from "./component/list/ShapeOne"
import ShapeTwo from "./component/list/ShapeTwo"

function App() {
  const userData = [
    { id: "1", name: "abbass", email: "abbass@abbass", age: "30" },
    { id: "2", name: "nadine", email: "nadine@nadine", age: "25" },
    { id: "3", name: "houssen", email: "houssen@houssen", age: "23" },
    { id: "4", name: "mahdi", email: "mahdi@mahdi", age: "18" },
  ];
  return (
    <div className="App">
    <SwiperCarousel data={userData} ><ShapeOne/></SwiperCarousel>
    <SwiperCarousel data={userData} ><ShapeTwo/></SwiperCarousel>
    </div>
  );
}

export default App;
