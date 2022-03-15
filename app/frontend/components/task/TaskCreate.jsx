import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function TaskCreate({ isHidden, setIsHidden }) {
  const [values, setValues] = useState({
    title: "",
    task_type: "deep-work",
    schedule: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post("/tasks", values);
    setIsHidden(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isHidden ? "hidden" : ""
      } bg-gray-100 rounded-xl p-2 fixed z-10 h-[45vh] sm:h-[38vh] sm:w-[50vw] sm:left-[25vw] w-[90vw] left-[5vw] top-[11%]`}
    >
      <h1 className="text-center text-2xl">Create new task</h1>

      <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
        <label className="-top-3 px-1 left-4 absolute bg-gray-100" for="title">
          task title
        </label>
        <input
          className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </div>

      <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
        <label
          className="-top-3 px-1 left-4 absolute bg-gray-100"
          for="schedule"
        >
          task schedule
        </label>
        <input
          className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
          type="text"
          name="schedule"
          value={values.schedule}
          onChange={handleChange}
        />
      </div>

      <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
        <label className="-top-3 px-1 left-4 absolute bg-gray-100" for="type">
          task type
        </label>
        <select
          className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
          name="task_type"
          value={values.task_type}
          onChange={handleChange}
        >
          <option value="deep-work">Deep Work</option>
          <option value="shallow-work">Shallow Work</option>
          <option value="repeating">Repeating</option>
        </select>
      </div>

      <button
        className="block px-4 py-2 mt-5 mx-auto bg-purple-500 text-white rounded-lg"
        type="submit"
      >
        Add task
      </button>
    </form>
  );
}
