import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "./TodoContext";
const GetInput = () => {
  const [list, setList] = useContext(TodoContext);
  const [task, setTask] = useState("");
  const addTask = e => {
    const val = Math.floor(Math.random() * 1000000);
    const main = { task: e.target.value, key: val };
    setTask(main);
    e.preventDefault();
  };
  const addSubmit = e => {
    setList(preList => [...preList, task]);
    e.preventDefault();
    e.target.reset();
  };
  useEffect(() => {
    //console.log(1)
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <form onSubmit={addSubmit} className="mt-4 mb-2">
        <input type="text" name="task" onChange={addTask} className="input" />
        <button type="submit" className="btn1">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};
export default GetInput;
