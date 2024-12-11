import { DarkMode } from "./DarkMode";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pb-[50px]">
      <h1 className="text-4xl uppercase text-white tracking-[15px] font-semibold">
        Todo
      </h1>
      <DarkMode />
    </div>
  );
};
