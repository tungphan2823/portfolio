import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import BottomNavigation from "../components/BottomNavigation";
const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <BottomNavigation/>
    </>
  );
};
export default RootPage;
