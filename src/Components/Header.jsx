import { DarkMode } from "./DarkMode";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pb-[40px]">
      <h1 className="text-5xl uppercase text-white tracking-[20px]">Todo</h1>
      <DarkMode />
    </div>
  );
};
