import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen h-full w-full bg-[#fafafa]">
      <Sidebar />
      <div className="pl-56 w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
