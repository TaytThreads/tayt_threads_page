import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <NavBar />
      </div>

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
