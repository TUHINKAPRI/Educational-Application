import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IoIosSearch } from "react-icons/io";

function Hero() {
  return (
    <div>
      <div className="bg-[#FFCF3C] flex justify-center items-center">
        <h1 className="text-black  h-[45px] font-medium text-[14px] flex items-center ">
          Are you a university or school student for an online tutoring
          partnership?
          <Link to="/contact" className="text-minBlue ms-2 ">
            Talk to us
          </Link>
        </h1>
      </div>
      <div className="grid container grid-cols-2">
        <div className="col-span-1 relative  ms-24 flex flex-col justify-center">
          <p className="text-[#C67336] font-bold ">
            100% SATISFACTION GUARANTEE
          </p>
          <div className="absolute top-32 left-96 ">
            <img src="Plane.png" alt="" width={70} />
          </div>
          <h1 className="text- relative font-semibold text-[50px]">
            Find Your <br /> Perfect Tutor
            <div className="absolute top-8 left-80">
              <img src="Vector 102.png" alt="" width={70} />
            </div>
            <img
              src="Vector 6.png"
              alt=""
              width={200}
              className="absolute bottom-0 left-44"
            />
          </h1>
          <p className="my-3  w-96 ">
            We help you find perfect for 1-on-1 lessons it is completely free
            and private. We help you find perfect for 1-on-1 lessons it is
            completely free and private
          </p>
          <div className="flex mt-3 justify-start gap-4 items-center">
            <Link to="/courses" className=" ">
              <Button variant="yellow">Get Started</Button>
            </Link>
            <div className="font-semibold flex gap-2 items-center">
              <button className="bg-[#CCE0FF] w-12 rounded-full">
                <img src="Frame 4.png" alt="" />
              </button>
              <span className="text-[14px] ">See how it works</span>
            </div>
          </div>
          
            <div className="flex mt-9  justify-between items-center bg-white shadow rounded-full py- w-[400px]">
              <div className="flex items-center space-x-2 bg-white px-4 py- rounded-l-full">
                <IoIosSearch size={25}/>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="outline-none text-gray-700 w-full"
                />
              </div>
              <button className="bg-minBlue text-white px-4 py-3 rounded-full">
                Continue
              </button>
            </div>
          
        </div>
        <div className="">
          <img src="Hero.png" alt="" width={600} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
