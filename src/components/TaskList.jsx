import { TaskItem } from "./TaskItem";

export const TaskList = ({ setTasks, filteredTasks }) => {
  return (
    <div className="mt-6">
      {filteredTasks.map((task, i) => {
        const isFirst = i === 0;
        return (
          <TaskItem
            key={task.id}
            task={task}
            tasks={filteredTasks}
            setTasks={setTasks}
            isFirst={isFirst}
          />
        );
      })}
    </div>
  );
};
