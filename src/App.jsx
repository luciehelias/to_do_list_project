import { Footer } from "./components/Footer";
import Cookies from "js-cookie";

import { Header } from "./components/Header";
import { useEffect, useState } from "react";

import { useTheme } from "./contexts/theme.context";
import { TaskActions } from "./Components/TaskActions";
import { TaskFilter } from "./Components/TaskFilter";
import { useScreenSize } from "./contexts/screenSize.context";
import { TaskList } from "./Components/TaskList";
import { TaskForm } from "./Components/TaskForm";

const App = () => {
  const { styles } = useTheme();
  const { isMobile } = useScreenSize();

  const [tasks, setTasks] = useState(() => {
    const savedTasks = Cookies.get("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    Cookies.set("tasks", JSON.stringify(tasks), { expires: 7 });
  }, [tasks]);

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return task.status === "active";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  const handleAllTasks = () => setFilter("all");
  const handleActiveTasks = () => setFilter("active");
  const handleCompletedTasks = () => setFilter("completed");

  const mobileStyle = () => {
    if (isMobile) return " bg-cover min-h-screen w-4/5";
    return "";
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-no-repeat bg-contain pt-[75px] 
          ${styles.backgroundApp} 
        }`}
    >
      <div className={`${mobileStyle()}`}>
        <Header />
        <TaskForm
          placeholder="Create a new todo..."
          tasks={tasks}
          setTasks={setTasks}
        />
        <div className="shadow-lg rounded-lg md:w-[540px]">
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
          />
          <TaskActions
            tasks={tasks}
            handleActiveTasks={handleActiveTasks}
            handleCompletedTasks={handleCompletedTasks}
            handleAllTasks={handleAllTasks}
            setTasks={setTasks}
          />
        </div>
        {isMobile && (
          <div
            className={`shadow-lg rounded-lg ${styles.backgroundTaskActionColor} flex justify-center p-3 mt-4`}
          >
            <TaskFilter
              handleActiveTasks={handleActiveTasks}
              handleAllTasks={handleAllTasks}
              handleCompletedTasks={handleCompletedTasks}
            />
          </div>
        )}
        <p className="text-center mt-12 text-dark-darkGrayishBlue">
          Drag and drop to reorder list
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default App;
