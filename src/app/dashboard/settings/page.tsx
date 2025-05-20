import React from "react";
import { Container } from "@/components/layout/container";
import { CardSettingForm } from "@/features/setting/components/card-setting-form";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const SettingPage = () => {
  return (
    <Container>
      <div className="space-y-10 w-full">
        <div className="flex items-center gap-x-2.5">
          Setting theme
          <ThemeToggle />
        </div>
        <div className=" flex  justify-center">
          <CardSettingForm />
        </div>
      </div>
    </Container>
  );
};

export default SettingPage;
