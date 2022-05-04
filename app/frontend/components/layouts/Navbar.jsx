import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import axios from "axios";

export default function Navbar() {
  const { auth } = usePage().props;
  const handleLogout = () => {
    Inertia.delete("/logout");
  };

  return (
    <div className="navbar bg-base-100 border-b-2 border-b-gray-300 z-20 col-span-2">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">
          ChronoBlock
        </a>
      </div>
      <div className="flex-none gap-2">
        <p>{auth.user.name}</p>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://avatars.dicebear.com/api/micah/spike48.svg"
                className="bg-primary"
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
