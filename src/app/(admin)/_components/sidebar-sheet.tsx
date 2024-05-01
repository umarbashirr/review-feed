"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import NavRoutes from "./nav-routes";

export default function SidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <IoMenu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="-ml-4">
        <div className="mb-2 flex items-center justify-start pl-4">
          <Logo />
        </div>
        <NavRoutes />
      </SheetContent>
    </Sheet>
  );
}
