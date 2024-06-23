import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoList = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center cursor-pointer flex-1 gap-2">
        <img src={tick} alt="" className="w-5 " />
        <p className="text-slate-800">{text}</p>
      </div>
      <img src={deleteIcon} alt="" className="w-3 cursor-pointer" />
    </div>
  );
};

export default TodoList;
