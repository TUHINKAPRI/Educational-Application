import React from "react";
import InstructorCard from "../common/InstructorCard";
import CTAButton from "../common/CTAButton";
import { IoIosArrowForward } from "react-icons/io";
function InstructorBody() {
  const data = [
    {
      name: "Tuhin",
      image: "Hero.png",
      totalCourse: "34+",
    },
    {
      name: "Tuhin ",
      image: "Hero.png",
      totalCourse: "34+",
    },
    {
      name: "Tuhin",
      image: "Hero.png",
      totalCourse: "34+",
    },
    {
      name: "Tuhin",
      image: "Hero.png",
      totalCourse: "34+",
    },
    {
      name: "Tuhin",
      image: "Hero.png",
      totalCourse: "34+",
    },
    {
      name: "Tuhin",
      image: "Hero.png",
      totalCourse: "34+",
    },
  ];

  return (
    <div className="container   w-full ps-16 mt-20 grid grid-cols-6 ">
      <div className="col-span-2  flex flex-col justify-center ">
        <h1 className="text-[36px] mb-8 font-semibold  ">
          Our Best
          <span className="text-yellow-500 ms-2">Skilled</span> Instructors
        </h1>
        <p className="text-[14px] font-medium  ">
          At the Academy, we strive to bring together the best professors for
          the best courses
        </p>

        <CTAButton goTo="/instructor" variant="yellow" className="mt-5">
          All Instructors
          <span className="ms-1">
            <IoIosArrowForward size={15} />
          </span>
        </CTAButton>
      </div>
      <div className="w-full  col-span-4  ">
        <div className="flex  justify-center gap-4 flex-wrap">
          {data?.map((ele, index) => (
            <InstructorCard
              key={index}
              name={ele?.name}
              totalCourse={ele?.totalCourse}
              image={ele?.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructorBody;
