import { useState } from "react";
import { useTheme } from "../contexts/theme.context";

export const TaskFilter = ({
  handleActiveTasks,
  handleAllTasks,
  handleCompletedTasks,
}) => {
  const [activeCategory, setActiveCategory] = useState("");
  const { styles } = useTheme();

  // Define categories and their associated actions
  const categories = [
    { label: "All", action: handleAllTasks, key: "all" },
    { label: "Active", action: handleActiveTasks, key: "active" },
    { label: "Completed", action: handleCompletedTasks, key: "completed" },
  ];

  const handleCategoryClick = (key, action) => {
    if (activeCategory === key) {
      setActiveCategory(""); // Deselect the category if it's already active
    } else {
      action(); // Execute the associated action
      setActiveCategory(key); // Set the clicked category as active
    }
  };

  return (
    <div className="flex gap-4">
      {categories.map(({ label, action, key }) => (
        <p
          key={key}
          className={`cursor-pointer ${styles.hoverTaskActionColor} ${
            activeCategory === key
              ? "text-brightBlue"
              : "text-dark-darkGrayishBlue"
          }`}
          onClick={() => handleCategoryClick(key, action)}
        >
          {label}
        </p>
      ))}
    </div>
  );
};
