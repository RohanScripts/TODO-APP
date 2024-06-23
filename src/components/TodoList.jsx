import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoList = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center cursor-pointer flex-1 gap-2">
        <img
          onClick={() => toggle(id)}
          src={isCompleted ? tick : not_tick}
          alt=""
          className="w-5 "
        />
        <p className={`text-slate-800  ${isCompleted ? "line-through" : ""}`}>
          {text}
        </p>
      </div>
      <img
        src={deleteIcon}
        onClick={() => deleteTodo(id)}
        alt=""
        className="w-3 cursor-pointer hover:w-5 duration-300"
      />
    </div>
  );
};

export default TodoList;
