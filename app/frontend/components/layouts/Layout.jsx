import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <main className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] min-h-screen max-h-screen max-w-screen">
      <Navbar />
      <SideBar />
      {children}
    </main>
  );
}
