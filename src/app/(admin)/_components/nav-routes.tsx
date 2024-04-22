"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavRoutes = () => {
  const pathname = usePathname();
  const routes = [
    {
      label: "dashboard",
      path: "/dashboard",
    },
    {
      label: "reviews",
      path: "/reviews",
    },
    {
      label: "clients",
      path: "/clients",
    },
    {
      label: "forms",
      path: "/forms",
    },
    {
      label: "settings",
      path: "/settings",
    },
  ];

  return (
    <nav className="flex flex-col space-y-1 p-2">
      {routes.map(({ label, path }: { label: string; path: string }) => {
        return (
          <Link
            href={path}
            className={cn(
              "capitalize  rounded-md p-2 duration-200 ease-in-out transition-all",
              pathname === path
                ? "bg-primary text-white shadow-sm"
                : "text-primary hover:bg-gray-100 "
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavRoutes;
