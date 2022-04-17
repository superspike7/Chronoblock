import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div className="h-screen w-full flex">
        <div className="border-r border-r-gray-500 p-2">
          <SideBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
