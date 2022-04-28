import React from "react";
import Layout from "../components/layouts/Layout";
import DayHeader from "../components/schedule/DayHeader";
import Tasks from "./Tasks";
import Preview from "../components/schedule/Preview";

export default function Today({}) {
  return (
    <Layout>
      <div className="gap-0.5 bg-gray-300 grid grid-cols-2 grid-rows-[auto_82.8vh]">
        <DayHeader />
        <Tasks tasks={data} />
        <Preview />
      </div>
    </Layout>
  );
}

const data = [
  {
    id: 1,
    title: "Chronoblock development",
    status: "todo",
    task_type: "deepWork",
    task_start: 4,
    task_end: 9,
    schedule: "06:30AM - 09:00AM",
  },
  {
    id: 2,
    title: "Wake up",
    status: "done",
    task_type: "repeating",
    task_start: 1,
    task_end: 2,
    schedule: "05:00AM - 05:30AM",
  },
  {
    id: 3,
    title: "Road work",
    status: "doing",
    task_type: "repeating",
    task_start: 2,
    task_end: 4,
    schedule: "05:30AM - 06:30AM",
  },
  {
    id: 4,
    title: "Write devlog no. 0",
    status: "todo",
    task_type: "highlight",
    task_start: 10,
    task_end: 12,
    schedule: "09:30AM - 10:30AM",
  },
];
