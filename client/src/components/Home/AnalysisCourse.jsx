import React from "react";
import SmallCard from "../common/SmallCard";

function AnalysisCourse() {
  return (
    <div className="grid mt-4 grid-cols-2">
      <div className="col-span-1 ms-14 ">
        <img src="Component 1.png" alt="ewf"  style={{width:"600px",height:"500px"}} />
      </div>
      <div className="w-[450px] flex flex-col justify-center">
        <h1 className="text-[#C67336] text-[14px] font-bold">
          COMMUNITY HUB DISCUSSION FORUM
        </h1>
        <h1 className="text-[26px] my-2 font-semibold ">
          Discussion Forum for Sharing, Learning, and Helping
        </h1>
        <p className="text-[13px]">
          Dive into our dynamic Community Hub – a central space for rich
          discussions, shared experiences, and mutual support. Connect with a
          diverse community of learners, where knowledge knows no bounds. Join
          us in the journey of collaborative learning and growth! 🌐🚀
        </p>
        <div className="mt-4 flex gap-5">
          <SmallCard title="12K+" text="Success Journey" />
          <SmallCard title="98+" text="Best Mentor" />
          <SmallCard title="50+" text="courses" />
        </div>
      </div>
    </div>
  );
}

export default AnalysisCourse;
