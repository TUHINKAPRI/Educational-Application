import React from "react";
import Benefit from "./Benefit";

function WhyChooseUs() {
  const benefits = [
    {
      bgColor: "bg-[#0163fd]",
      borderColor:"border-[#0163fd]",
      img: "Tuition.png",
      title: "Tailored Learning Experience",
      description:
        "Benefit from personalized courses that adapt to your learning style and preferences, ensuring a customized educational journey.",
    },
    {
      bgColor: "bg-[#FD4D01]",
      borderColor:"border-[#FD4D01]",
      img: "Machine Learning.png",
      title: "Engaging Multimedia Content",
      description:
        "Enjoy the freedom to learn at your own pace, anytime, anywhere, allowing you to balance education with your busy schedule.",
    },
    {
      bgColor: "bg-[#FD017A]",
      borderColor: "border-[#FD017A]",
      img: "Artificial Intelligence.png",
      title: "Career-Boosting Skills",
      description:
        "Immerse yourself in interactive and enjoyable learning with multimedia content, quizzes, and hands-on exercises for a dynamic educational experience.",
    },
    {
      bgColor: "bg-[#FAAB00]",
      borderColor:"border-[#FAAB00]",
      img: "Brick.png",
      title: "Tailored Learning Experience",
      description:
        "Invest in your future with practical skills that enhance your career prospects, making you competitive and opening doors to new opportunities.",
    },
  ];
  return (
    <div className="mt-5 container px-5 ">
      <div className="text-center  w-[400px] mx-auto">
        <h1 className="text-[#C67336] font-bold text-[14px] my-2  ">
          WHY CHOSE US
        </h1>
        <p className="text-[32px] font-semibold ">
          Benefits of online tutoring services with us
        </p>
        
      </div>
      <div className=" container flex gap-4 mt-12 flex-wrap justify-around">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              bgColor={benefit.bgColor}
              borderColor={benefit.borderColor}
              icon={benefit.img}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
    </div>
  );
}

export default WhyChooseUs;
