import React from "react";

function InstructorCard({image,name,totalCourse}) {
  return (
    <div className="w-[232px] gap-[20px]  h-[232px] p-[10px] flex flex-col items-center border border-[#F1F1F1] rounded-[12px]  bg-[#FAFAFA]">
      <img src={image} alt="" className="h-[161px]" />
      <div className="flex justify-between  w-full">
        <h1 className="font-semibold text-[13px] ">
          {name}
        </h1>
        <p className="text-[12px]">
          {totalCourse} <span className="ms-2">courses</span>
        </p>
      </div>
    </div>
  );
}

export default InstructorCard;



