import React from "react";
import CourseCard from "../courses/CourseCard";

function TopSellingCourseBox() {
  return (
    <div className="container mt-16 "  >
      <div>
        <h1 className="title-font sm:text-[16px] text-[20px] mb-4 font-semibold text-[#C67336]">
          OUR TOP SELLING COURSES
        </h1>
      </div>
      <div className="flex gap-2 justify-between  flex-wrap">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      </div>
    </div>
  );
}

export default TopSellingCourseBox;
