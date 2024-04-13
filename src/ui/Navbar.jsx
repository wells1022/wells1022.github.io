import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrollpos, setScrollpos] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollpos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (
        navActive &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !document.getElementById("toggle-menu")?.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [navActive]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const menuItems = [
    { title: "About", nav: "AboutMe" },
    { title: "Experience", nav: "WorkExperience" },
    { title: "Skills", nav: "MySkills" },
    { title: "Certifications", nav: "Certifications" },
    { title: "Portfolio", nav: "MyPortfolio" },
    { title: "Education", nav: "Education"}
    // { title: "Contact", nav: "Contact" },
  ];

  return (
    <nav
      className={clsx(
        "flex justify-between items-center px-10 lg:px-15 py-2 bg-transparent fixed top-0 left-0 right-0 h-16 z-50",
        { "bg-white duration-500": scrollpos > 10 }
      )}
    >
      <button>
        <Link
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="flex items-center gap-3"
        >
          <img
            alt="Wells Yu"
            className="w-12 h-11 rounded-lg"
            src={
              scrollpos > 10 ? "./img/icon-white.png" : "./img/icon-dark.png"
            }
          />
          <p
            className={`font-bold text-4xl font-raisley whitespace-nowrap ${
              scrollpos > 10 ? "text-sky-700" : "text-white"
            }`}
          >
            Wells Yu
          </p>
        </Link>
      </button>
      <div
        className="lg:hidden flex-col justify-between absolute top-6 right-6 flex z-50"
        onClick={toggleNav}
        id="toggle-menu"
      >
        <svg
          className={clsx("h-6 w-6 text-stone-50", {
            "text-stone-950": scrollpos > 10,
          })}
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {!navActive ? (
            <>
              {" "}
              <line x1="3" y1="12" x2="21" y2="12" />{" "}
              <line x1="3" y1="6" x2="21" y2="6" />{" "}
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          ) : (
            <>
              {" "}
              <line x1="5" y1="6" x2="19" y2="18" />{" "}
              <line x1="5" y1="18" x2="19" y2="6" />
            </>
          )}
        </svg>
      </div>
      <ul
        className={clsx(
          "flex text-xl font-bold text-stone-950 bg-[#f5fcff] whitespace-nowrap",
          "absolute flex-col gap-8 py-5 px-20 md:px-0 top-16 right-0 w-screen justify-end",
          "lg:flex lg:flex-row lg:relative lg:bg-transparent lg:text-stone-50 lg:gap-10 lg:item-center lg:top-0",
          { "lg:text-stone-950": scrollpos > 10 },
          { hidden: !navActive }
        )}
        ref={ref}
      >
        {menuItems.map((link, index) => (
          <Link
            key={index}
            onClick={closeMenu}
            activeClass="text-sky-500"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to={link.nav}
            className="hover:text-sky-500"
          >
            <button>{link.title}</button>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
