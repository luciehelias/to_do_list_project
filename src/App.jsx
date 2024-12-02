import { ClearButton } from "./Components/ClearButton";
import { Footer } from "./Components/Footer";
import { TaskFilter } from "./Components/TaskFilter";
import { TaskItem } from "./Components/TaskItem";
import { TaskList } from "./Components/TaskList";
import { Header } from "./Components/Header";

// import bgImage from "./assets/images/bg-desktop-light.jpg";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto bg-no-repeat bg-contain bg-desktop-light pt-[75px] ">
      <div>
        <Header />
        <TaskItem placeholder="Create a new todo..." />
        <TaskList />
        items left
        <TaskFilter />
        <ClearButton />
        Drag and drop to reorder list
        <Footer />
      </div>
    </div>
  );
};

export default App;
