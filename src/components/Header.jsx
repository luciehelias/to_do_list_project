import { DarkMode } from "./DarkMode";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pb-[30px]">
      <h1 className="text-4xl uppercase text-white tracking-[15px]">Todo</h1>
      <DarkMode />
    </div>
  );
};
