import React from "react";
import { useState, useEffect } from "react";
import "./extensionList.css";

export default function ExtensionList({ filter }) {
  console.log("rerendered");
  console.log(filter);
  const [data, setData] = useState([]);

  useEffect(function () {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  function handleRemoveItem(name) {
    setData((data) => data.filter((el) => el.name !== name));
  }

  function checkFilter(obj) {
    if (filter === "all") return data;

    return obj.isActive.toString() === filter;
  }

  function handleItemActive(name) {
    console.log("my name is " + name);

    setData(
      data.map((obj) => {
        if (obj.name === name) return { ...obj, isActive: !obj.isActive };
        return obj;
      }),
    );
  }

  return (
    <div className="container mx-auto grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {data
        .filter((obj) => checkFilter(obj))
        .map(function (obj) {
          return (
            <div
              key={obj.name}
              className="flex flex-col justify-between gap-7 rounded-2xl border-indigo-300 bg-white p-5 shadow-[rgba(0,0,0,0.16)_0px_1px_4px] dark:bg-neutral-700 dark:bg-opacity-50"
            >
              <div className="flex gap-5">
                <img src={obj.logo} className="self-start" />
                <div>
                  <div className="extension__title text-wrap text-2xl font-bold dark:text-white">
                    {obj.name}
                  </div>
                  <p className="extension__description mt-2 text-wrap opacity-70 dark:text-white">
                    {obj.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="dark:border-neutral/30 rounded-full border-2 border-neutral-400/30 px-4 py-2 font-semibold transition duration-500 hover:bg-red-500 hover:text-white focus:bg-neutral-200 focus:outline-none focus:outline-red-700 dark:text-white dark:hover:bg-red-500 dark:hover:text-black dark:focus:bg-neutral-500 dark:focus:outline-red-400"
                  onClick={() => handleRemoveItem(obj.name)}
                >
                  Remove
                </button>

                {/*     <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={obj.isActive?true:false} onChange={()=>handleItemActive(obj.name)}value={obj.isActive} className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200  peer-focus:ring-2 peer-focus:ring-red-500
                dark:peer-focus:ring-red-500 rounded-full  dark:bg-neutral-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-red-500"></div>
            </label>*/}

                {/*    <label class="relative flex justify-between items-center group p-2 text-xl">
              <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
              <label class="relative flex justify-between items-center group p-2 text-xl">

                <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
              </label>
            </label> */}

                <label className="switch relative inline-block h-6 w-11">
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    onChange={() => handleItemActive(obj.name)}
                    checked={obj.isActive ? true : false}
                  />
                  <span className="slider round absolute h-full w-full cursor-pointer rounded-full bg-neutral-300 transition before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition before:content-[''] peer-checked:bg-red-700 peer-checked:before:translate-x-5 peer-checked:hover:bg-red-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-700 peer-focus:ring-offset-2 peer-focus:ring-offset-white dark:bg-neutral-600 dark:peer-checked:bg-red-400 dark:peer-focus:ring-red-400 dark:peer-focus:ring-offset-black"></span>
                </label>
              </div>
            </div>
          );
        })}
    </div>
  );
}

{
  /*for the focus of the toggle, seems like outline does not work, only ring can work here.*/
}
