import { useState } from "react";
import iconCheck from "../assets/images/icon-check.svg";

export const TaskItem = ({ placeholder }) => {
  const [checked, setChecked] = useState(false);
  const [taskText, setTaskText] = useState("");

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2 bg-white w-[540px] h-[60px] px-6  border-b">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="hidden"
        />
        <span
          className={`h-6 w-6 rounded-full border ${
            checked
              ? "bg-gradient-to-br from-[#00c6ff] to-[#7700ff]"
              : "border-gray-300"
          } flex items-center justify-center opacity-80`}
        >
          {checked && <img src={iconCheck} alt="icon check on"></img>}
        </span>
      </label>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`pl-3 text-xl w-full bg-transparent outline-none ${
          checked && taskText
            ? "line-through text-light-lightGrayishBlue"
            : " text-light-veryDarkGrayishBlue"
        }`}
      />
    </div>
  );
};
