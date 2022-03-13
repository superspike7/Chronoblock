import React, { useState } from "react";
import NoteIcon from "../components/task/NoteIcon";
import TaskCreate from "../components/task/TaskCreate";
import Task from "../components/task/Task";

export default function Tasks({ tasks }) {
  const [isHiddenForm, setIsHiddenForm] = useState(true);
  return (
    <>
      <div className="relative sm:w-[50%] w-[90%] mx-auto mt-24  flex bg-gray-900 gap-0.5">
        <TaskCreate isHidden={isHiddenForm} />
        <div className="grid place-items-center fixed bottom-20 right-1 h-16 w-16 bg-purple-500 text-gray-100 rounded-full text-center ">
          <NoteIcon />
        </div>
        <div
          onClick={() =>
            isHiddenForm ? setIsHiddenForm(false) : setIsHiddenForm(true)}
          className="grid place-items-center fixed bottom-1 right-1 h-16 w-16 bg-purple-500 text-gray-100 rounded-full text-center text-6xl"
        >
          +
        </div>
        <ul className="grid grid-cols-1 border-t-4 border-pink-900 gap-y-0.5 bg-pink-900 text-center">
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">5</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">6</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">7</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">8</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">9</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">10</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">11</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">12</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">1</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">2</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">3</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">4</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">5</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">6</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">7</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">8</li>
          <li className="text-2xl h-32 bg-[#301934] text-gray-100">9</li>
        </ul>
        <div className="bg-pink-900 rounded-xl gap-0.5 grid grid-rows-[repeat(34,_minmax(0,_1fr))] flex-1">
          {tasks.map((task) => {
            return (
              <Task
                title={task.title}
                schedule={task.schedule}
                status={task.status}
              />
            );
          })}
          {
            /*
          <Task title="Wake Up!!" time="30min" status={true} />
          <div className="bg-orange-500 bg-opacity-70 border-4 border-orange-500 rounded-xl p-1 row-span-2">
            Roadwork <span className="block text-gray-300 font-light">1h</span>
          </div>
          <div className="bg-yellow-500 bg-opacity-70 rounded-xl border-4 border-yellow-500 p-1 row-[4/span_3]">
            Pick up mamabing{" "}
            <span className="block text-gray-300 font-light">1h 30min</span>
          </div>
      */
          }
        </div>
      </div>
    </>
  );
}
