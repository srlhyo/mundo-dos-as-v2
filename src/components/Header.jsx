import React from "react";
import Heading from "./Heading";
import Nav from "./Nav";
import hosts from "../images/hosts.svg";
import globe from "../images/globe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <Nav />
      <div className="bg-palepink xl:flex flex-row items-end justify-around pt-10 pb-6 h-2/6">
        <div className="hidden xl:block">
          <img src={hosts} alt="people" />
        </div>
        <div className="self-start pt-10 sm:pt-16 text-center" id="Home">
          <Heading heading="O MUNDO DOS A'S" />
          <a
            className="rounded-full py-3 px-4 2xl:py-6 2xl:px-9 bg-lightyellow inline-block mt-8 text-xl"
            href="#"
          >
            See our promotional video{" "}
            <FontAwesomeIcon className="ml-4" icon={faBolt} />
          </a>
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
