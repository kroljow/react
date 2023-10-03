// src/app/page.js

import React from "react";

const App = () => {
  const todoList = [
    { id: 1, task: "Einkaufen gehen", completed: false },
    { id: 2, task: "React-App erstellen", completed: true },
    { id: 3, task: "Übungen für JavaScript machen", completed: false },
  ];


  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          {todo.completed ? " (abgeschlossen)" : ""}
        </li>
      ))}
    </ul>
  );
};

export default App;
