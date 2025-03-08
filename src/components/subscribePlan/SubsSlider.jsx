"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SubsSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "15%", // Adjust this value to control side visibility
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true
  };

  return (
    <div className="slider-container w-full mx-auto py-20">
      <Slider {...settings}>
        <div>
          <div className="w-[90%] h-[200px] md:h-[600px] bg-white rounded-[25px] m-4 shadow-lg flex items-center justify-center">
            <h2 className="text-xl">Slide 1</h2>
          </div>
        </div>
        <div>
          <div className="w-[90%] h-[200px] md:h-[600px] bg-white rounded-[25px] m-4 shadow-lg flex items-center justify-center">
            <h2 className="text-xl">Slide 2</h2>
          </div>
        </div>
        <div>
          <div className="w-[90%] h-[200px] md:h-[600px] bg-white rounded-[25px] m-4 shadow-lg flex items-center justify-center">
            <h2 className="text-xl">Slide 3</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SubsSlider;
