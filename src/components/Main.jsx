import React, { useState } from "react";
import Menu from "./Menu";
import ExtensionList from "./ExtensionList";

export default function Main() {
  const [filter, setFilter] = useState("all");

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      <Menu filter={filter} onhandleFilter={handleFilter} />
      <ExtensionList filter={filter} />
    </>
  );
}
