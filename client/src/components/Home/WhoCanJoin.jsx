function WhoCanJoin() {
  const data = [
    {
      type: "college/University",
      img: "Groupicons (2).png",
    },
    {
      type: "Individual/Working professional",
      img: "Groupicons.png",
    },
    {
      type: "Startup",
      img: "Groupicons (1).png",
    },
    {
      type: "Corporate",
      img: "Groupicons (3).png",
    },
  ];
  return (
    <div className="px-8 ms-20 grid items-center grid-cols-2 mt-14">
      <div className="col-span-1">
        <h1 className="text-[16px] my-3 font-semibold space-x-2  text-[#C67336]  ">
          WHO CAN JOIN?
        </h1>
        <h1 className="text-[35px] font-semibold ">
          Skill Development <br/> Schemes For All
        </h1>
        <div className="flex mt-6  gap-10 flex-wrap ">
          {data?.map((ele, index) => (
            <div key={index} className="flex  justify-center gap-7 items-center w-44 flex-col">
              <div className="flex w-full gap-8">
                <h1 className="text-minBlue font-semibold text-[20px] ">
                  0{index + 1}
                </h1>
                <img src={ele?.img} alt="" width={60} height={80} />
              </div>

              <h1 className="text-[13px] text-center font-semibold">{ele?.type}</h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="OBJECTS.png" alt="3r2" />
      </div>
    </div>
  );
}

export default WhoCanJoin;
