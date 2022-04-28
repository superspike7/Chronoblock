import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const range = "05:00AM-12:00PM";
const [start, end] = range.split("-");
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("time", format(time, "HH:mmaa"));
    console.log(new Date().setHours(start));
  }, []);
  return (
    <div
      style={{ top: "7.7rem" }}
      className="absolute w-full z-30 flex items-center"
      data-tip="06:00AM"
    >
      <span
        className="tooltip tooltip-right bg-secondary rounded-full w-4 h-4 z-40 overflow-visible"
        data-tip="10:16AM"
      >
      </span>
      <span className="h-0.5 bg-secondary flex-1"></span>
    </div>
  );
};

export default Clock;
