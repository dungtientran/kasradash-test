import React from "react";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <h2 className="text-xl lg:text-2xl">Admin Dashboard</h2>

      <div className="flex items-center gap-2 px-4">
        <ThemeToggle />
        <div>User button</div>
      </div>
    </header>
  );
};
