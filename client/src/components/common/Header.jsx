import React, { useState } from "react";
import { Button } from "../ui/button";
import { navLink } from "@/constants/navLink";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border container shadow-md">
      <div className=" mx-auto container py-3">
        <div className="flex relative justify-between items-center">
          <div className="text-xl relative w-28 py-1  text-minBlue font-bold text-[26px] ">
            <span className="text-darkYellow text-[26px] ">E</span>onify
            <div className="absolute right-[20px] top-[0px] ">
              <img src="cap.png" alt="" width={30} height={30} />
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="flex gap-7 flex-col md:flex-row md:mx-6">
            {navLink.map((ele, index) => (
              <Link
                to={ele?.path}
                key={index}
                className=" font-normal text-[16px]  hover:text-blue-600"
              >
                {ele?.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-5 items-center py-2 md:py-0">
            <Button variant="secondary" className="px-5">
              Login
            </Button>
            <Button className="px-5">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
