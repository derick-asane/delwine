import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="pt-[64px]">
      <Outlet />
    </div>
  );
};

export default MainContent;
