import React from "react";

function NoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      class="bi bi-journal-text"
      viewBox="0 0 16 16"
    >
      <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
    </svg>
  );
}

export default function Tasks() {
  return (
    <div className="relative sm:w-[50%] w-[90%] mx-auto mt-24  flex bg-gray-900 gap-0.5">
      <div className="grid place-items-center fixed bottom-20 right-1 h-16 w-16 bg-purple-500 text-gray-100 rounded-full text-center ">
        <NoteIcon />
      </div>
      <div className="grid place-items-center fixed bottom-1 right-1 h-16 w-16 bg-purple-500 text-gray-100 rounded-full text-center text-6xl">
        +
      </div>
      <ul className="grid grid-cols-1 gap-y-0.5 bg-pink-900 text-center">
        <li className="text-2xl h-32 border-t-4 border-pink-900 text-gray-100 bg-[#301934]">
          5
        </li>
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
        <div className="bg-red-500 bg-opacity-80 border-4 border-red-500 rounded-xl p-1 row-span-1">
          Wake up <span className="block text-gray-300 font-light">30min</span>
        </div>
        <div className="bg-orange-500 bg-opacity-80 border-4 border-orange-500 rounded-xl p-1 row-span-2">
          Roadwork <span className="block text-gray-300 font-light">1h</span>
        </div>
        <div className="bg-yellow-500 bg-opacity-80 rounded-xl border-4 border-yellow-500 p-1 row-[4/span_3]">
          Pick up mamabing{" "}
          <span className="block text-gray-300 font-light">1h 30min</span>
        </div>
      </div>
    </div>
  );
}
