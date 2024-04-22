"use client";

import Logo from "@/components/logo";
import NavRoutes from "./nav-routes";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-56 h-full rounded-tr-xl rounded-br-xl shadow-md bg-white">
      <div className="h-16 flex items-center justify-start pl-4">
        <Logo />
      </div>
      <NavRoutes />
    </aside>
  );
};

export default Sidebar;
