const Benefit = ({ bgColor,borderColor ,icon, title, description }) => {
  
  return (
    <div
      className={` relative  p-5 w-[290px] h-[236px] rounded-xl shadow-xl  `}
    >
    <div className={`absolute  rounded-es-lg bottom-0 left-0 border-l-4 ${borderColor} border-b-4 h-[100px] w-[100px]`}></div>
    <div className={`absolute  rounded-tr-xl top-0 right-0 border-r-4 ${borderColor} border-t-4 h-[100px] w-[100px]`}></div>
      <div className=" ">
        <div
          className={` ${bgColor}   flex justify-center items-center shadow-md rounded-xl h-10 w-10 `}
        >
          <img src={icon} alt="" width={30} height={30} />
        </div>
        <div className=" mt-5 ">
          <h3 className=" font-semibold text-left text-[15px] ">{title}</h3>
          <p className=" text-left text-[14px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
