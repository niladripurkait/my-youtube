import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { horizontalScroll } from "../utils/helper";

const ButtonsList = () => {
  const list = [
    "All",
    "Music",
    "Live",
    "Rain",
    "Akshay Saini",
    "React JS",
    "Computer Programming",
    "4K resolution",
    "Rockets",
    "Dramedy",
    "Cricket",
    "Bollywood Music",
    "Tourism",
    "Comedy",
    "Stock markets",
    "Motorcycling",
    "Jukebox",
    "Mixes",
  ];

  const [clickedButton, setClickedButton] = useState(0);

  const handleButtonClick = (i) => {
    setClickedButton(i);
    console.log(i);
  };

  console.log(clickedButton);

  // const ref = useRef < HTMLDivElement > null;

  // const onWheel = (e) => {
  //   const elelemnt = ref.current;
  //   if (elelemnt) {
  //     if (e.deltaY == 0) return;
  //     elelemnt.scrollTo({
  //       left: elelemnt.scrollLeft + e.deltaY,
  //     });
  //   }
  // };

  return (
    <>
      <div
        // ref={ref}
        // onWheel={onWheel}
        onWheel={horizontalScroll}
        className="flex px-6 py-2 w-full h-14 items-center fixed  bg-white overflow-x-scroll hide-scroll"
      >
        {list.map((item, i) => {
          return (
            <Link
              to={"/category?v=" + item}
              key={item}
              className={`${
                clickedButton === i
                  ? "bg-black h-8 mx-2 text-white rounded-lg"
                  : ""
              }`}
              onFocus={() => handleButtonClick(i)}
            >
              <Button name={item} key={i} clicked={clickedButton} index={i} />
            </Link>
          );
        })}
      </div>
      <div className="h-14 w-full"></div>
    </>
  );
};

export default ButtonsList;
