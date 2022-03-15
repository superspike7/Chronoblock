import React, { useState } from "react";

const TASK_COLORS = {
  repeating: "orange",
  deepWork: "red",
  shallowWork: "yellow",
};

export default function Task({ title, time, status, type }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onClick={() => isShown ? setIsShown(false) : setIsShown(true)}
      className={`bg-${TASK_COLORS[type]}-500 relative bg-opacity-70 border-4 
                  border-${TASK_COLORS[type]}-500 rounded-xl p-1 row-span-1`}
    >
      <span
        className={`absolute top-2 right-2 h-4 w-4 bg-${
          status ? "green" : "gray"
        }-500 rounded-full`}
      >
      </span>
      {isShown && (
        <div className="flex gap-2 w-[20%] justify-center text-4xl absolute top-2 left-[40%]">
          <div className="cursor-pointer hover:text-gray-100 rounded-xl px-5 bg-red-100">
            x
          </div>
          <div className="cursor-pointer hover:text-gray-100 rounded-xl px-4 bg-red-100">
            ✓
          </div>
        </div>
      )}

      <p>{title}</p>
      <span className="block text-gray-300 font-light">{time}</span>
    </div>
  );
}
