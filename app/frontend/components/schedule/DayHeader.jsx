import React from "react";

const DayHeader = () => {
  return (
    <div className="bg-base-100 h-24 col-span-2 grid grid-cols-3 place-items-center">
      <div className="flex gap-1 w-[80%]">
        <button className="btn btn-sm btn-circle">&#60;</button>
        <button className="btn btn-sm btn-circle">&#62;</button>
        <p className="ml-2 text-2xl font-extrabold">April 30, 2022</p>
        <p className="ml-2 text-2xl">Today</p>
      </div>
      <div className="text-secondary text-center px-4 rounded-lg flex flex-col h-[95%] cursor-pointer bg-opacity-10 bg-secondary hover:bg-opacity-25">
        <h3 className="text-xl font-extrabold">
          Highlight of the Day:
        </h3>
        <p className="text-xl flex-1">
          Write devlog no. 0
        </p>
        <p className="text-sm text-gray-500 ">
          9:30AM - 10:30AM
        </p>
      </div>
      <div className="flex gap-2 w-[80%] justify-end">
        <button className="btn btn-secondary">+ Task</button>
        <button className="btn btn-accent">Reflect</button>
      </div>
    </div>
  );
};

export default DayHeader;
