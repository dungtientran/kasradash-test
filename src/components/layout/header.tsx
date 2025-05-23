import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";

export const Header = () => {
  return (
    <>
      <header className="flex h-16 shrink-0 px-4 md:px-6 items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h2 className="text-xl lg:text-2xl">Admin Dashboard</h2>
        </div>

        <div className="flex items-center gap-2 px-4">
          <ThemeToggle />
          {/* UserButton */}
        </div>
      </header>
      <Separator />
    </>
  );
};
