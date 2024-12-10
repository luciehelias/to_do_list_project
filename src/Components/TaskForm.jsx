import { useState } from "react";
import { useTheme } from "../contexts/theme.context";

export const TaskForm = ({ placeholder, tasks, setTasks }) => {
  const { borderCircleColor, backgroundInputColor } = useTheme();

  const [newTask, setNewTask] = useState({ text: "", status: "active" });

  const handleChange = (e) => {
    setNewTask({ ...newTask, text: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask.text.trim() === "") return;
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
    setTasks([...tasks, { id, ...newTask }]);
    setNewTask({ text: "", status: "active" });
  };

  return (
    <form
      className={`flex items-center ${backgroundInputColor()}  h-[50px] px-6  rounded-lg `}
      onSubmit={onSubmit}
    >
      <input type="checkbox" className="hidden" />
      <span
        className={`h-6 w-6 rounded-full border ${borderCircleColor()} flex items-center justify-center opacity-80`}
      ></span>
      <input
        type="text"
        value={newTask.text}
        onChange={handleChange}
        placeholder={placeholder}
        className={`pl-3 text-xl outline-none text-light-veryDarkGrayishBlue w-full ${backgroundInputColor()} `}
      />
    </form>
  );
};
