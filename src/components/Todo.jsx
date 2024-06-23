import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const addTodo = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((eachTodo) => eachTodo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((eachTodo) => {
        if (eachTodo.id === id) {
          return { ...eachTodo, isCompleted: !eachTodo.isCompleted };
        }
        return eachTodo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-white opacity-75 place-self-center w-96 max-w-md flex flex-col p-7  min-h-[450px] rounded-lg border-4 border-inherit">
      {/* titel */}
      <div className="flex items-center gap-2">
        <img src={todo_icon} alt="todo_icon" className="w-7" />
        <h1 className="text-2xl font-bold">Todo List</h1>
      </div>
      {/* input */}
      <div className="flex items-center mt-4 mb-4 opacity-100 bg-gray-300 rounded-full ">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          ref={inputRef}
          className="bg-transparent outline-none  h-10  pl-4 flex-1 "
          type="text"
          placeholder="Add a Task..."
        />
        <button
          onClick={addTodo}
          className="flex items-center gap-1  bg-orange-500 h-10 pl-3 pr-3 font-semibold rounded-full "
        >
          <span className="text-xl">+ </span>
          Add
        </button>
      </div>
      {/* todo items */}
      <div>
        {todos.map((eachTodo, index) => (
          <TodoList
            key={index}
            text={eachTodo.text}
            deleteTodo={deleteTodo}
            id={eachTodo.id}
            isCompleted={eachTodo.isCompleted}
            toggle={toggle}
          ></TodoList>
        ))}
      </div>
    </div>
  );
};

export default Todo;
