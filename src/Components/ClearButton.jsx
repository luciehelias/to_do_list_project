import { useTheme } from "../contexts/theme.context";

export const ClearButton = ({ tasks, setTasks }) => {
  const { styles } = useTheme();

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.status !== "completed");
    setTasks(updatedTasks);
  };
  return (
    <div>
      <p
        className={` text-dark-darkGrayishBlue ${styles.hoverTaskActionColor} cursor-pointer`}
        onClick={handleDelete}
      >
        Clear Completed
      </p>
    </div>
  );
};
