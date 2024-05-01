"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (data.statusCode !== 200) {
        throw new Error(data?.message);
      }

      toast({
        title: "Success",
        description: data?.message,
      });

      setIsLoading(false);
      router.replace("/login");
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message,
      });
    }
  };
  return (
    <header className="h-16 px-6 flex items-center justify-between lg:justify-end w-full">
      <div className="flex lg:hidden">
        <SidebarSheet />
      </div>
      <Button onClick={logoutHandler} disabled={isLoading}>
        {isLoading ? "Logging out" : "Logout"}
      </Button>
    </header>
  );
};

export default Header;
