import React, { useState } from "react";
import NoteIcon from "../components/task/NoteIcon";
import TaskCreate from "../components/task/TaskCreate";
import Task from "../components/task/Task";
import Layout from "../components/layouts/Layout";

export default function Tasks({ tasks }) {
  const [isHiddenForm, setIsHiddenForm] = useState(true);

  return (
    <Layout>
      <div className="relative sm:w-[50%] w-[90%] mx-auto mt-24  flex bg-gray-100 gap-0.5">
        <TaskCreate isHidden={isHiddenForm} setIsHidden={setIsHiddenForm} />
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
        <ul className="grid border-t-2 border-t-gray-900 grid-cols-1 gap-y-0.5 bg-gray-900 text-center">
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            05:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            06:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            07:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            08:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            09:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            10:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            11:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            12:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            01:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            02:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            03:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            04:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            05:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            06:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            07:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            08:00
          </li>
          <li className="text-2xl h-32 bg-opacity-100 bg-gray-100 text-gray-500">
            09:00
          </li>
        </ul>
        <div className="bg-gray-100 rounded-xl gap-0.5 grid grid-rows-[repeat(34,_minmax(0,_1fr))] flex-1">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                title={task.title}
                schedule={{ start: task.task_start, end: task.task_end }}
                status={task.status}
                type={task.task_type}
                id={task.id}
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
    </Layout>
  );
}
