import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/img-1.jpeg";
import img2 from "../images/img-2.jpeg";
import img3 from "../images/img-3.jpeg";
import img4 from "../images/img-4.jpeg";
import img5 from "../images/img-5.jpeg";
import img6 from "../images/img-6.jpeg";

function Lightbox(props) {
  const images = [img2, img5, img3, img4, img1, img6];

  function next() {
    props.setnum((prev) => {
      if (prev > images.length - 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function prev() {
    props.setnum((prev) => {
      if (prev < 1) {
        return 5;
      } else {
        return prev - 1;
      }
    });
  }

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-gray-800 bg-opacity-95 flex justify-center items-center z-30">
      <span
        className="cursor-pointer absolute top-10 right-10 text-3xl font-extrabold text-gray-300"
        onClick={props.close}
      >
        X
      </span>
      <FontAwesomeIcon
        className="text-2xl text-gray-300 absolute left-2 sm:left-8 md:left-24 cursor-pointer"
        icon={faAngleDoubleLeft}
        onClick={prev}
      />
      {images.map(function (img, index) {
        return (
          <img
            key={index}
            className={`w-4/6 sm:w-auto sm:h-5/6 transition-opacity duration-1000 absolute ${
              props.num === index ? "opacity-1" : "opacity-0"
            }`}
            src={images[index]}
            alt="gallery img"
          />
        );
      })}
      <FontAwesomeIcon
        className="text-2xl text-gray-300 absolute right-2 sm:right-8 md:right-24 cursor-pointer"
        icon={faAngleDoubleRight}
        onClick={next}
      />
    </div>
  );
}

export default Lightbox;
