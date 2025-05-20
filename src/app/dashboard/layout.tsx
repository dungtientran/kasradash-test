import { Header } from "@/components/layout/header";
import { SideBar } from "@/components/layout/side-bar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="bg-background relative flex w-full flex-1 flex-col ">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
