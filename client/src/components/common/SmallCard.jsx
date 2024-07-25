import React from "react";

function SmallCard({ title, text }) {
  return (
    <div className="flex flex-col w-[126px] h-[142px] shadow-lg   rounded-sm">
      <div className="text-center my-auto ">
        <h1 className="text-minBlue  text-[32px] font-bold  ">{title}</h1>
        <p className="text-[16px] font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default SmallCard;
