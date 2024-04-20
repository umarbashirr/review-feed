import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
