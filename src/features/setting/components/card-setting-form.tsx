"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SettingForm } from "./setting-form";

export const CardSettingForm = () => {
  return (
    <Card className="w-full max-w-[377px] px-6 ">
      <CardTitle className={"text-center text-2xl font-bold"}>
        Setting Form
      </CardTitle>

      <CardContent className={"p-0"}>
        <SettingForm />
      </CardContent>
    </Card>
  );
};
