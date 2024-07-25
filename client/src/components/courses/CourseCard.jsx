import React from "react";
import { FaBook } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import CTAButton from "../common/CTAButton";
import { IoIosArrowForward } from "react-icons/io";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
function CourseCard() {
  return (
    <div className="flex justify-between flex-col p-[10px] w-[310px] h-[413px] bg-[#FAFAFA] border border-[#F1F1F1]  rounded-[12px] ">
      <div className="h-[240px] w-full">
        <img
          src="https://dummyimage.com/720x600"
          alt=""
          className="w-full h-[240px]"
        />
      </div>

      <h1 className="font-semibold text-[14px]">
        Learn Figma - UI/UX Design Essential Training
      </h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <FaBook className="text-gray-400" size={12} />
          <span className="text-[12px]"> Lesson : 6 </span>
        </div>
        <div className="flex items-center gap-1">
          <FaUserGraduate className="text-gray-400" size={12} />
          <span className="text-[12px]"> Students : 130 </span>
        </div>
        <div className="flex items-center gap-1">
          <GiTrophy className="text-gray-400" size={12} />
          <span className="text-[12px]"> Beginner : 6 </span>
        </div>
      </div>
      <div className="flex justify-between  items-center">
        <CTAButton goTo="/instructor" variant="yellow" className="">
          Start Course
          <span className="ms-1">
            <IoIosArrowForward size={15} />
          </span>
        </CTAButton>
        <span className="flex  items-center">
          <Rating value={3} style={{ maxWidth: 80 }} />
          <span className=" ms-2  text-[11px] font-semibold">130+</span>
        </span>
      </div>
    </div>
  );
}

export default CourseCard;
