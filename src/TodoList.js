import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
const TodoList = () => {
  const [list, setList] = useContext(TodoContext);
  const trash = item => {
    const newList = list.filter(i => i.key !== item);
    //console.log(newList);
    setList(newList);
  };

  const finish = id => {
    //const newList = [...list];
    const update = list.map(y => {
      if (y.key === id) {
        return (
          {
            task: y.task,
            key: y.key,
            complete: true
          }
        );
      } else {
        return y;
      }
    });
    setList(update);
  };
  //console.log(list);
  return (
    <div>
      {list.map(x => (
        <div className="container-1" key={x.key}>
          <FontAwesomeIcon icon={faTasks} className="mr-2 task-1" />
          {x.complete ? (
            <del>{x.task}</del>
          ) : (
            
              <li>{x.task}</li>
            
          )}
          <button className="btn-1" onClick={() => finish(x.key)}>
            <FontAwesomeIcon icon={faCheck} className="trash-1" />
          </button>
          <button className="btn-2" onClick={() => trash(x.key)}>
            <FontAwesomeIcon icon={faTrash} className="trash-2" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
