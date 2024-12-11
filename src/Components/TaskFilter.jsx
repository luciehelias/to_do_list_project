import { useState } from "react";
import { useTheme } from "../contexts/theme.context";

export const TaskFilter = ({
  handleActiveTasks,
  handleAllTasks,
  handleCompletedTasks,
}) => {
  const [activeCategory, setActiveCategory] = useState("");
  const { styles } = useTheme();

  return (
    <div className="flex gap-4">
      <p
        className={` ${styles.hoverTaskActionColor} cursor-pointer ${
          activeCategory === "all"
            ? "text-blue-500"
            : "text-dark-darkGrayishBlue"
        }`}
        onClick={() => {
          if (activeCategory === "all") {
            setActiveCategory("");
          } else {
            handleAllTasks();
            setActiveCategory("all");
          }
        }}
      >
        All
      </p>
      <p
        className={` ${styles.hoverTaskActionColor} cursor-pointer ${
          activeCategory === "active"
            ? "text-blue-500"
            : "text-dark-darkGrayishBlue"
        }`}
        onClick={() => {
          if (activeCategory === "active") {
            setActiveCategory("");
          } else {
            handleActiveTasks();
            setActiveCategory("active");
          }
        }}
      >
        Active
      </p>
      <p
        className={`${styles.hoverTaskActionColor} cursor-pointer ${
          activeCategory === "completed"
            ? "text-blue-500"
            : "text-dark-darkGrayishBlue"
        }`}
        onClick={() => {
          if (activeCategory === "completed") {
            setActiveCategory("");
          } else {
            handleCompletedTasks();
            setActiveCategory("completed");
          }
        }}
      >
        Completed
      </p>
    </div>
  );
};
