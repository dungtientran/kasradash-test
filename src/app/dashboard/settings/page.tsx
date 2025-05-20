import React from "react";
import { Container } from "@/components/layout/container";
import { CardSettingForm } from "@/features/setting/components/card-setting-form";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Separator } from "@/components/ui/separator";

const SettingPage = () => {
  return (
    <Container>
      <div className=" w-full">
        <div className="flex items-center gap-x-2.5">
          Setting theme
          <ThemeToggle />
        </div>
        <Separator className="my-5" />
        <div className="flex justify-center">
          <CardSettingForm />
        </div>
      </div>
    </Container>
  );
};

export default SettingPage;
