import { Inertia } from "@inertiajs/inertia";
import React from "react";

export default function Task(
  { title, schedule, status, type, id, task_start, task_end },
) {
  // row-[${schedule.start}/${schedule.end}]
  return (
    <div
      style={{ gridRow: `${task_start} / ${task_end}` }}
      onClick={() => isShown ? setIsShown(false) : setIsShown(true)}
      className={`${
        TASK_COLORS[type]
      } relative bg-opacity-40 cursor-pointer border-l-8 p-1 hover:bg-opacity-60`}
    >
      <div className="absolute top-2 right-2 flex justify-between gap-2">
        <p>{schedule}</p>
        <span className={`badge ${STATUS_COLORS[status]}`}></span>
      </div>
      <p>{title}</p>
    </div>
  );
}

const TASK_COLORS = {
  repeating: "bg-orange-500 border-orange-500",
  deepWork: "bg-red-500 border-red-500",
  shallowWork: "bg-yellow-500 border-yellow-500",
  highlight: "bg-secondary border-secondary",
};

const STATUS_COLORS = {
  done: "badge-primary",
  doing: "badge-secondary",
  todo: "badge-accent",
};
