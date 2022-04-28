import React from "react";
import Task from "../components/task/Task";
import Clock from "../components/utils/Clock";

export default function Tasks({ tasks }) {
  return (
    <div className="relative grid grid-cols-[auto_1fr] gap-0.5 overflow-y-auto">
      <Clock />
      <ul className="grid border-t-2 border-t-gray-900 grid-cols-1 gap-y-0.5 bg-gray-900 text-center">
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          05:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          06:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          07:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          08:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          09:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          10:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          11:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          12:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          01:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          02:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          03:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          04:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          05:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          06:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          07:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          08:00
        </li>
        <li className="text-2xl h-32 bg-opacity-100 bg-base-100 text-gray-500">
          09:00
        </li>
      </ul>
      <div className="bg-base-100 gap-0.5 grid grid-rows-[repeat(34,_minmax(0,_1fr))] flex-1">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              task_start={task.task_start}
              task_end={task.task_end}
              status={task.status}
              type={task.task_type}
              id={task.id}
              schedule={task.schedule}
            />
          );
        })}
        {
          /*
          <div className="bg-orange-500 bg-opacity-70 border-4 border-orange-500 rounded-xl p-1 row-[5/7]">
            test Roadwork{" "}
            <span className="block text-gray-300 font-light">1h</span>
          </div>
          <Task title="Wake Up!!" time="30min" status={true} />
          <div className="bg-yellow-500 bg-opacity-70 rounded-xl border-4 border-yellow-500 p-1 row-[4/span_3]">
            Pick up mamabing{" "}
            <span className="block text-gray-300 font-light">1h 30min</span>
          </div>
      */
        }
      </div>
    </div>
  );
}
