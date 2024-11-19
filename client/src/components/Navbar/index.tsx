import React from "react";
import { Menu, Moon, Sun, User } from "lucide-react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

const Navbar = () => {

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);



  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
        >
          <Menu className="h-8 w-8 dark:text-white" />
        </button>
        <div className="relative flex w-48">
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded bg-gray-100 p-2 pl-8 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center">
      <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <div className="ml-2 hidden items-center md:flex">
          {/* <div className="flex h-9 w-9 items-center justify-center">
            {user?.profilePicture ? (
              <Image
                src={user.profilePicture}
                alt={user.username}
                width={36}
                height={36}
                className="rounded-full"
              />
            ) : (
              <User className="h-6 w-6 dark:text-white" />
            )}
          </div> */}
          <span className="mx-3 text-gray-800 dark:text-white">
            {/* {user?.username || "User"} */}
          </span>
          <button
            // onClick={onSignOut}
            className="rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
