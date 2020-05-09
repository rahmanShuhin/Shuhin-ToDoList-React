import React from "react";
import "./styles.css";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";
import Nav from "../Nav";
import GetInput from "./GetInput";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Nav />
        <GetInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
