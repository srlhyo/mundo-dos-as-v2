import { Link, animateScroll as scroll } from "react-scroll";

function MobileNav(props) {
  return (
    <div className="lg:hidden fixed top-0 right-0 w-3/4 h-screen bg-white z-10 bg-opacity-95 flex flex-col justify-center items-center">
      <span
        className="cursor-pointer absolute top-10 right-10 text-3xl font-extrabold"
        onClick={props.closeMenu}
      >
        X
      </span>
      <div className="text-2xl flex flex-col font-extrabold">
        <li className="list-none py-2 text-pink-medium  hover:text-golden text-3xl cursor-pointer">
          <Link
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="list-none py-2 text-pink-medium  hover:text-golden text-3xl cursor-pointer">
          <Link
            to="Sobre Nos"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sobre Nos
          </Link>
        </li>
        <li className="list-none py-2 text-pink-medium  hover:text-golden text-3xl cursor-pointer">
          <Link
            to="Galeria"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Galeria
          </Link>
        </li>
        <li className="list-none py-2 text-pink-medium  hover:text-golden text-3xl cursor-pointer">
          <Link
            to="Contacto"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </div>
    </div>
  );
}

export default MobileNav;
