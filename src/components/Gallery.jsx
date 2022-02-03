import React from "react";
import Heading from "./Heading";
import Lightbox from "./Lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import img2 from "../images/img-2.jpeg";
import yellowWave from "../images/yellowwave.svg";

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [num, setNum] = React.useState(0);
  const [plusIcon1, setPlusIcon1] = React.useState("text-xl opacity-0");
  const [plusIcon2, setPlusIcon2] = React.useState("text-xl opacity-0");
  const [plusIcon3, setPlusIcon3] = React.useState("text-xl opacity-0");
  const [plusIcon4, setPlusIcon4] = React.useState("text-xl opacity-0");
  const [plusIcon5, setPlusIcon5] = React.useState("text-xl opacity-0");
  const [plusIcon6, setPlusIcon6] = React.useState("text-xl opacity-0");

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function img1Clicked() {
    openLightbox();
    setNum(0);
  }

  function img2Clicked() {
    openLightbox();
    setNum(1);
  }

  function img3Clicked() {
    openLightbox();
    setNum(2);
  }

  function img4Clicked() {
    openLightbox();
    setNum(3);
  }

  function img5Clicked() {
    openLightbox();
    setNum(4);
  }

  function img6Clicked() {
    openLightbox();
    setNum(5);
  }

  function showPlusIcon1() {
    setPlusIcon1("opacity-1 text-3xl");
  }

  function hidePlusIcon1() {
    setPlusIcon1("opacity-0 text-xl");
  }

  function showPlusIcon2() {
    setPlusIcon2("opacity-1 text-3xl");
  }

  function hidePlusIcon2() {
    setPlusIcon2("opacity-0 text-xl");
  }

  function showPlusIcon3() {
    setPlusIcon3("opacity-1 text-3xl");
  }

  function hidePlusIcon3() {
    setPlusIcon3("opacity-0 text-xl");
  }

  function showPlusIcon4() {
    setPlusIcon4("opacity-1 text-3xl");
  }

  function hidePlusIcon4() {
    setPlusIcon4("opacity-0 text-xl");
  }

  function showPlusIcon5() {
    setPlusIcon5("opacity-1 text-3xl");
  }

  function hidePlusIcon5() {
    setPlusIcon5("opacity-0 text-xl");
  }

  function showPlusIcon6() {
    setPlusIcon6("opacity-1 text-3xl");
  }

  function hidePlusIcon6() {
    setPlusIcon6("opacity-0 text-xl");
  }

  return (
    <div
      className="w-full sm:mx-auto bg-cover pt-16 bg-wave-background"
      id="Galeria"
    >
      <Heading heading="Galeria" />
      <div className="xl:w-10/12 mx-auto grid-cols-3 px-6 pt-16 sm:px-16 xl:px-20 space-y-2 md:space-y-0 md:grid md:gap-3 md:grid-rows-3">
        <div className="w-full rounded border-8 border-white overflow-hidden">
          <div className="bg-img2 bg-cover transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img1Clicked} onMouseOver={showPlusIcon1} onMouseOut={hidePlusIcon1} >
            <img className="opacity-0 cursor-pointer" src={img2} alt="image"  />
            <FontAwesomeIcon className={`absolute top-10 right-10 text-white transition-all duration-700 cursor-pointer ${plusIcon1}`} icon={faSearchPlus} />
          </div>
        </div>
        <div className="w-full col-span-2 row-span-2 rounded border-8 border-white overflow-hidden">
          <div className="bg-img5 bg-cover transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img2Clicked} onMouseOver={showPlusIcon2} onMouseOut={hidePlusIcon2}>
            <img className="opacity-0 cursor-pointer" src={img2} alt="image" />
            <FontAwesomeIcon className={`absolute top-10 right-10 sm:top-16 sm:right-16 text-white transition-all duration-700 cursor-pointer ${plusIcon2}`} icon={faSearchPlus} />
          </div>
        </div>
        <div className="w-full rounded border-8 border-white overflow-hidden">
          <div className="bg-img3 bg-cover bg-center transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img3Clicked} onMouseOver={showPlusIcon3} onMouseOut={hidePlusIcon3}>
            <img className="opacity-0 cursor-pointer" src={img2} alt="image" />
            <FontAwesomeIcon className={`absolute top-10 right-10 text-white transition-all duration-700 cursor-pointer ${plusIcon3}`} icon={faSearchPlus} />
          </div>
        </div>
        <div className="w-full rounded bg-center border-8 border-white overflow-hidden">
          <div className="bg-img4 bg-cover bg-center transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img4Clicked} onMouseOver={showPlusIcon4} onMouseOut={hidePlusIcon4}>
            <img className="opacity-0 cursor-pointer" src={img2} alt="image" />
            <FontAwesomeIcon className={`absolute top-10 right-10 text-white transition-all duration-700 cursor-pointer ${plusIcon4}`} icon={faSearchPlus} />
          </div>
        </div>
        <div className="w-full rounded border-8 border-white overflow-hidden">
          <div className="bg-img1 bg-cover transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img5Clicked} onMouseOver={showPlusIcon5} onMouseOut={hidePlusIcon5}>
            <img className="opacity-0 cursor-pointer" src={img2} alt="image" />
            <FontAwesomeIcon className={`absolute top-10 right-10 text-white transition-all duration-700 cursor-pointer ${plusIcon5}`} icon={faSearchPlus} />
          </div>
        </div>
        <div className="w-full rounded hover:shadow-2xl border-8 border-white overflow-hidden">
          <div className="bg-img6 bg-cover transform hover:scale-110 transition-all duration-1000 ease-in-out" onClick={img6Clicked} onMouseOver={showPlusIcon6} onMouseOut={hidePlusIcon6}>
            <img className="opacity-0 cursor-pointer" src={img2} alt="image" />
            <FontAwesomeIcon className={`absolute top-10 right-10 text-white transition-all duration-700 cursor-pointer ${plusIcon6}`} icon={faSearchPlus} />
          </div>
        </div>
      </div>
      {lightboxOpen ?  <Lightbox close={closeLightbox} num={num} setnum={setNum} /> : null}
      <img className="w-full" src={yellowWave} alt="yellow border" />
    </div>
  );
}

export default Gallery;
