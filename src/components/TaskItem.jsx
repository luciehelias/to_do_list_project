import { useState } from "react";
import Cookies from "js-cookie";
import iconCheck from "../assets/images/icon-check.svg";
import { useTheme } from "../contexts/theme.context";
import { useScreenSize } from "../contexts/screenSize.context";

export const TaskItem = ({ task, tasks, setTasks, isFirst }) => {
  const { isDarkMode, styles } = useTheme();
  const { isMobile } = useScreenSize();

  const [checked, setChecked] = useState(task.status === "completed");

  const updateCookies = (updatedTasks) => {
    Cookies.set("tasks", JSON.stringify(updatedTasks), { expires: 7 });
  };

  const handleChange = () => {
    let newTasks = [];

    // Trouver et modifier la tâche correspondante
    const taskToModify = tasks.find((element) => element.id === task.id);
    taskToModify.status = checked ? "active" : "completed";

    // Construire une nouvelle liste de tâches
    tasks.forEach((element) => {
      if (element.id === task.id) {
        newTasks.push(taskToModify);
      } else {
        newTasks.push(element);
      }
    });

    // Mettre à jour l'état des tâches globales et les cookies
    setTasks(newTasks);
    updateCookies(newTasks);
    setChecked(!checked);
  };
  const handleDelete = () => {
    //permet de selectionner toutes les tasks que l'on veut garder sans celle surlaquelle on a cliqué
    const taskToKeep = tasks.filter((element) => element.id !== task.id);
    setTasks(taskToKeep);
  };

  const textColor = checked
    ? isDarkMode
      ? "line-through text-dark-darkGrayishBlue"
      : "line-through text-light-lightGrayishBlue"
    : isDarkMode
    ? "text-dark-lightGrayishBlue"
    : "text-light-veryDarkGrayishBlue";

  return (
    <div
      className={`flex items-center space-x-2 ${
        styles.backgroundInputColor
      } h-[60px] px-6 ${styles.borderBottomInputColor} 
       justify-between group ${isFirst ? "rounded-t-md" : ""}`}
    >
      <div className="flex ">
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="hidden"
          />
          <span
            className={`h-6 w-6 rounded-full ${
              checked
                ? "bg-gradient-to-br from-[#00c6ff] to-[#7700ff] "
                : styles.borderCircleColor
            } flex items-center justify-center opacity-80`}
          >
            {checked && <img src={iconCheck} alt="icon check on"></img>}
          </span>
        </label>
        <p
          className={`pl-3 text-xl outline-none cursor-pointer ${textColor}`}
          onClick={handleChange}
        >
          {task.text}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        className={`${
          styles.deleteCrossColor
        } cursor-pointer  transition-opacity duration-300 ${
          isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        fill="currentColor"
        onClick={handleDelete}
      >
        <path
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
};
