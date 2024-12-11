import { useEffect, useState } from "react";

import { TaskFilter } from "./TaskFilter";
import { useTheme } from "../contexts/theme.context";
import { useScreenSize } from "../contexts/screenSize.context";
import { ClearButton } from "./ClearButton";

export const TaskActions = ({
  tasks,
  handleActiveTasks,
  handleAllTasks,
  handleCompletedTasks,
  setTasks,
}) => {
  const { isMobile } = useScreenSize();
  const { styles } = useTheme();

  // set number of tasks Left to 0
  const [tasksLeft, setTasksLeft] = useState(0);

  //update number of active tasks every time tasks change
  useEffect(() => {
    const activeTasks = tasks.filter((task) => task.status === "active");
    setTasksLeft(activeTasks.length);
  }, [tasks]);

  return (
    <div
      className={`flex justify-between px-5 py-4 ${styles.backgroundTaskActionColor} rounded-b-md`}
    >
      <p className="text-dark-darkGrayishBlue hover:text-dark-veryDarkGrayishBlue1 cursor-pointer">
        {tasksLeft} items left
      </p>
      {!isMobile && (
        <TaskFilter
          handleActiveTasks={handleActiveTasks}
          handleAllTasks={handleAllTasks}
          handleCompletedTasks={handleCompletedTasks}
        />
      )}
      <ClearButton tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
