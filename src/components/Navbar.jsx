"use client";

import ApplicationLogo from "./ApplicationLogo";
import ArrowButton from "./ArrowButton";

const Navbar = () => {
  return (
    <div className="bg-transparent absolute top-0 z-50 w-full">
      <header className="hidden md:flex items-center justify-between px-16 py-8 ">
        <ApplicationLogo  width="auto" height={"24px"}  />
        <nav>
          <ul className="flex items-center gap-[67px] text-sm neue-montreal-text">
            <li>
              <a href="/renovatie">Renovatie</a>
            </li>
            <li>
              <a href="/realisaties">Realisaties</a>
            </li>
            <li>
              <a href="/over-ons">Over ons</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ArrowButton text="Gratis offerte" background="white" href="/contact" />
      </header>

      <header className="flex md:hidden items-center justify-between p-4 group">
        <div className="z-10">
          <ApplicationLogo width="auto" height={"24px"} />
        </div>

        <label className="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
          >
            <path
              d="M0.664062 1.16667V0H19.3307V1.16667H0.664062ZM0.664062 14V12.8333H19.3307V14H0.664062ZM0.664062 7.58333V6.41667H19.3307V7.58333H0.664062Z"
              fill="white"
            />
          </svg>
          <input type="checkbox" hidden />
        </label>

        <div className="fixed inset-0 w-full h-full bg-bgBlack-300 group-has-[:checked]:max-w-full max-w-0 overflow-hidden transition-all duration-300 ease-in-out">
          <nav className="h-full p-4">
            <ul className="pt-36 flex flex-col items-center justify-start gap-4 h-full text-white neue-montreal-text text-lg">
              <li>
                <a href="/renovatie">Renovatie</a>
              </li>
              <li>
                <a href="/realisaties">Realisaties</a>
              </li>
              <li>
                <a href="/over-ons">Over ons</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
