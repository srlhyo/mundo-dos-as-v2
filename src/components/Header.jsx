import React from "react";
import Heading from "./Heading";
import Nav from "./Nav";
import hosts from "../images/hosts.svg";
import globe from "../images/globe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import mundoAs from "../videos/mundo-as.mp4";

function Header() {
  const [vodeoOpen, setVideoOpen] = React.useState(false);

  function openVideoMenu() {
    setVideoOpen(true);
  }

  function closeVideoMenu() {
    setVideoOpen(false);
  }

  return (
    <header>
      <Nav />
      <h1>hellooooo</h1>
      <div className="bg-palepink xl:flex flex-row items-end justify-around pt-10 pb-6 h-2/6">
        <div className="hidden xl:block">
          <img src={hosts} alt="people" />
        </div>
        <div className="self-start pt-10 sm:pt-16 text-center" id="Home">
          <Heading heading="O MUNDO DOS A'S" />

<<<<<<< HEAD
          {vodeoOpen === false ? (
=======

          {vodeoOpen == false ? (
>>>>>>> origin/main
            <button
              className="rounded-full py-3 px-4 2xl:py-6 2xl:px-9 bg-lightyellow inline-block mt-8 text-xl"
              onClick={openVideoMenu}
            >
              See our promotional video{" "}
              <FontAwesomeIcon className="ml-4" icon={faBolt} />
            </button>
          ) : (
            <div className="fixed top-0 right-0 w-full h-screen bg-white z-20 bg-opacity-95 flex flex-col justify-center items-center">
              <div className="w-8/12" id="video relative">
                <video  src={mundoAs} controls></video>
                <span
                  className="cursor-pointer absolute top-5 right-10 text-3xl font-extrabold"
                  onClick={closeVideoMenu}
                >
                  X
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full xl:w-1/3">
          <img
            className="pt-16 mx-auto transform -translate-x-8"
            src={globe}
            alt="globe"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
