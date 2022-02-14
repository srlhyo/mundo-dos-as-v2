import React from "react";
import MobileNav from "./MobileNav";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/logo-small.svg";
import hamburger from "../images/ham.svg";

function Nav() {
  const [navOpen, setNavOpen] = React.useState(false);

  function openMobileMenu() {
    setNavOpen(true);
  }

  function closeMobileMenu() {
    setNavOpen(false);
  }
  return (
    <nav className="bg-pink-light flex flex-row items-center px-4 sm:px-14 py-4 justify-between">
      <img className="w-14 animate-pulse" src={logo} alt="Logo" />
      <ul className="text-xl hidden lg:block">
        <li className="inline mr-10 hover:text-white cursor-pointer">
          <Link
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            home
          </Link>
        </li>
        <li className="inline mr-10 hover:text-white cursor-pointer">
          <Link
            to="Sobre Nos"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            sobre nos
          </Link>
        </li>
        <li className="inline mr-10 hover:text-white cursor-pointer">
          <Link
            to="Galeria"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            galeria
          </Link>
        </li>
        <li className="inline mr-10 hover:text-white cursor-pointer">
          <Link
            to="Contacto"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={900}
          >
            contacto
          </Link>
        </li>
      </ul>
      {navOpen === false ? (
        <img
          className="w-8 lg:hidden fixed top-6 right-4 cursor-pointer z-20"
          src={hamburger}
          onClick={openMobileMenu}
          alt="hamburger-icon"
        />
      ) : (
        <MobileNav closeMenu={closeMobileMenu} />
      )}
    </nav>
  );
}

export default Nav;
