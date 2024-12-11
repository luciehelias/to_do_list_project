import { useTheme } from "../contexts/theme.context";

export const ClearButton = ({ tasks, setTasks }) => {
  const { hoverTaskActionColor } = useTheme();

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.status !== "completed");
    setTasks(updatedTasks);
  };
  return (
    <div>
      <p
        className={` text-dark-darkGrayishBlue ${hoverTaskActionColor()} cursor-pointer`}
        onClick={handleDelete}
      >
        Clear Completed
      </p>
    </div>
  );
};
