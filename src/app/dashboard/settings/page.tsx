import React from "react";
import { Container } from "@/components/layout/container";
import { CardSettingForm } from "@/features/setting/components/card-setting-form";

const SettingPage = () => {
  return (
    <Container>
      <div className="w-full flex  justify-center">
        <CardSettingForm />
      </div>
    </Container>
  );
};

export default SettingPage;
