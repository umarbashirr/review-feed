import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen h-full w-full bg-[#fafafa]">
      <Sidebar />
      <div className="pl-56">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
