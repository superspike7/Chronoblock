import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

export default function Task({ title, schedule, status, type, id }) {
  const [isShown, setIsShown] = useState(false);

  const doneTask = () => {
    Inertia.patch(`/tasks/${id}`, { status: true });
  };

  const failTask = () => {
    Inertia.patch(`/tasks/${id}`, { status: false });
  };

  // row-[${schedule.start}/${schedule.end}]

  return (
    <div
      style={{ gridRow: `${schedule.start} / ${schedule.end}` }}
      onClick={() => isShown ? setIsShown(false) : setIsShown(true)}
      className={`${
        TASK_COLORS[type]
      } relative bg-opacity-70 border-4 rounded-xl p-1 `}
    >
      <span
        className={`absolute top-2 right-2 h-4 w-4 ${
          STATUS_COLORS[status]
        } rounded-full`}
      >
      </span>
      {isShown && (
        <div className="flex gap-2 w-[20%] justify-center text-4xl absolute top-2 left-[40%]">
          <div
            onClick={failTask}
            className="cursor-pointer hover:text-gray-100 rounded-xl px-5 bg-red-100"
          >
            x
          </div>
          <div
            onClick={doneTask}
            className="cursor-pointer hover:text-gray-100 rounded-xl px-4 bg-red-100"
          >
            ✓
          </div>
        </div>
      )}

      <p>{title}</p>
    </div>
  );
}

const TASK_COLORS = {
  repeating: "bg-orange-500 border-orange-500",
  deepWork: "bg-red-500 border-red-500",
  shallowWork: "bg-yellow-500 border-yellow-500",
};

const STATUS_COLORS = {
  true: "bg-green-500",
  false: "bg-gray-500",
};
