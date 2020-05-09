import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [list, setList] = useState(()=>{
    const fromDb=localStorage.getItem("list");
    return fromDb ? JSON.parse(fromDb):[]
  });
  //console.log(localStorage.length);
  return (
    <TodoContext.Provider value={[list, setList]}>
      {props.children}
    </TodoContext.Provider>
  );
};
