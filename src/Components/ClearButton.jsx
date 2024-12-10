export const ClearButton = ({ tasks, setTasks }) => {
  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.status !== "completed");
    setTasks(updatedTasks);
  };
  return (
    <div>
      <p
        className=" text-dark-darkGrayishBlue hover:text-dark-veryDarkGrayishBlue1 cursor-pointer"
        onClick={handleDelete}
      >
        Clear Completed
      </p>
    </div>
  );
};
