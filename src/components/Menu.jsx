import React from "react";
import { twMerge } from "tailwind-merge";

export default function Menu({ filter, onhandleFilter }) {
  const styleClass =
    "px-5 py-2 shadow-md rounded-2xl bg-white dark:bg-neutral-700 dark:text-white  dark:focus:bg-neutral-400 dark:hover:bg-neutral-500 focus:outline-none focus:outline-red-400 hover:text-neutral-600 hover:opacity-80 dark:hover:opacity-100 dark:hover:text-white transition duration-500 ";
  const selectedStyle =
    "font-medium text-white focus:bg-red-700   bg-red-700  dark:focus:bg-red-400   dark:bg-red-400  dark:text-black dark:hover:bg-red-500 hover:bg-red-500 hover:text-white hover:opacity-100";

  const combinedStyle = twMerge(styleClass, selectedStyle);

  return (
    <div className="container mx-auto mb-5 mt-14 flex flex-col items-center justify-between gap-4 md:flex-row">
      <h1 className="text-3xl font-bold dark:text-white">Extension List</h1>

      <div className="space-x-2">
        {/*<button className={`${styleClass}  ${filter === "all" ? selectedStyle : ""}`} value="all" onClick={onhandleFilter}>All</button>
        <button className={`${styleClass}  ${filter === "active" ? selectedStyle : ""}`} value="true" onClick={onhandleFilter}>Active</button>
        <button className={`${styleClass}  ${filter === "inactive" ? selectedStyle : ""}`} value="false" onClick={onhandleFilter}>Inactive</button>
 */}

        <button
          className={`${filter === "all" ? combinedStyle : styleClass}`}
          value="all"
          onClick={onhandleFilter}
        >
          All
        </button>
        <button
          className={`${filter === "true" ? combinedStyle : styleClass}`}
          value="true"
          onClick={onhandleFilter}
        >
          Active
        </button>
        <button
          className={`${filter === "false" ? combinedStyle : styleClass}`}
          value="false"
          onClick={onhandleFilter}
        >
          Inactive
        </button>

        {/*
        <button className="px-5 py-2 shadow-md rounded-2xl font-medium
        focus:outline-none focus:outline-red-500
        dark:text-white dark:text-zinc-950
         dark:bg-neutral-600   dark:focus:bg-green-800  dark:focus:bg-neutral-700   dark:bg-red-400   hover:bg-red-500">test button</button>
*/}
        {/*   <button className={styleClass + (filter === "all" ? selectedStyle : "")} value="all" onClick={onhandleFilter}>All</button> */}
        {/*   <button className={styleClass + (filter === "true" ? selectedStyle : "")} value="true" onClick={onhandleFilter}>Active</button> */}
        {/*  <button className={styleClass + (filter === "false" ? selectedStyle : "")} value="false" onClick={onhandleFilter}>Inactive</button> */}
      </div>
    </div>
  );
}
//if in conflict, the higher number of color will win regardless of the order
