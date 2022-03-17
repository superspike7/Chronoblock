import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function TaskCreate({ isHidden, setIsHidden }) {
  const [values, setValues] = useState({
    title: "",
    task_type: "",
    task_start: "",
    task_end: "",
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
      } bg-gray-100 rounded-xl p-2 fixed z-10 h-[60vh] sm:h-[43vh] sm:w-[50vw] sm:left-[25vw] w-[90vw] left-[5vw] top-[11%]`}
    >
      <h1 className="text-center text-2xl">Create new task</h1>

      <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
        <label
          className="-top-3 px-1 left-4 absolute bg-gray-100"
          htmlFor="title"
        >
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

      <div className="flex w-full sm:gap-4 sm:flex-row flex-col">
        <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
          <label
            className="-top-3 px-1 left-4 absolute bg-gray-100"
            htmlFor="schedule"
          >
            task start
          </label>
          <select
            className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
            type="text"
            name="task_start"
            value={values.task_start}
            onChange={handleChange}
          >
            <option value="">-- choose an option --</option>
            {SCHEDULE.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
          <label
            className="-top-3 px-1 left-4 absolute bg-gray-100"
            htmlFor="schedule"
          >
            task end
          </label>
          <select
            className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
            type="text"
            name="task_end"
            value={values.schedule}
            onChange={handleChange}
          >
            <option value="">-- choose an option --</option>
            {SCHEDULE.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex p-2 flex-col border border-purple-500 rounded-xl bg-gray-100 relative mb-4 mt-8">
        <label
          className="-top-3 px-1 left-4 absolute bg-gray-100"
          htmlFor="type"
        >
          task type
        </label>
        <select
          className="p-1 bg-gray-100 outline-offset-[9px] rounded-md h-full focus:outline focus:outline-purple-600"
          name="task_type"
          value={values.task_type}
          onChange={handleChange}
        >
          <option value="">-- choose an option --</option>
          <option value="deepWork">Deep Work</option>
          <option value="shallowWork">Shallow Work</option>
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

const SCHEDULE = [
  { value: 1, label: "5AM" },
  { value: 2, label: "5:30AM" },
  { value: 3, label: "6AM" },
  { value: 4, label: "6:30AM" },
  { value: 5, label: "7AM" },
  { value: 6, label: "7:30AM" },
  { value: 7, label: "8AM" },
  { value: 8, label: "8:30AM" },
  { value: 9, label: "9AM" },
  { value: 10, label: "9:30AM" },
  { value: 11, label: "10AM" },
  { value: 12, label: "10:30AM" },
  { value: 13, label: "11AM" },
  { value: 14, label: "11:30AM" },
  { value: 15, label: "12AM" },
  { value: 16, label: "12:30PM" },
  { value: 17, label: "1PM" },
  { value: 18, label: "1:30PM" },
  { value: 19, label: "2AM" },
  { value: 20, label: "2:30PM" },
  { value: 21, label: "3PM" },
  { value: 22, label: "3:30PM" },
  { value: 23, label: "4PM" },
  { value: 24, label: "4:30PM" },
  { value: 25, label: "5PM" },
  { value: 26, label: "5:30PM" },
  { value: 27, label: "6PM" },
  { value: 28, label: "6:30PM" },
  { value: 29, label: "7PM" },
  { value: 30, label: "7:30PM" },
  { value: 31, label: "8PM" },
  { value: 32, label: "8:30PM" },
  { value: 33, label: "9PM" },
  { value: 34, label: "9:30PM" },
  { value: 35, label: "10PM" },
];
