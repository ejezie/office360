import React, { useState, useEffect, useRef } from "react";
import { sliderData as items } from "../sliderData";
import { Link } from "react-router-dom";

function Slider() {
  const [counter, setCounter] = useState(0);
  const [timeout, setTimeOut] = useState(null);

  const timeoutTime = 3;

  console.log(items.length);
  const prevItem = () => {
    var prevItem = counter - 1 < 0 ? items.lenght - 1 : counter - 1;
    clearTimeout(timeout);
    setCounter(prevItem);
    setTimeOut(() => {
      setTimeout(nextItem, timeoutTime);
    });
  };
  const nextItem = () => {
    var prevItem = counter + 1 < items.length ? counter + 1 : 0;
    clearTimeout(timeout);
    setCounter(nextItem);
    setTimeOut(() => {
      setTimeout(nextItem, timeoutTime);
    });
  };

  return (
    <div className="slider">
      {items.map((item) => {
        return (
          <div className="carousel">
            <div className="carousel-prev"></div>
            <div key={counter} className=".carousel-item ">
              <img src={item.image} alt="" />
              <div className="carousel-heading"></div>
            </div>
            <div className="carousel-next"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
