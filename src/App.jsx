//import { useState } from 'react'

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import ExtensionList from "./components/ExtensionList";
import Main from "./components/Main";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { useEffect } from "react";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light",
  );
  //if empty set, if not empty get
  //const theme= localStorage.getItem('theme') || localStorage.setItem('theme','light');

  useEffect(
    function () {
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [theme],
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
