import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();

  const token = cookieStore.get("token")?.value;

  if (token) {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
};

export default AuthLayout;
