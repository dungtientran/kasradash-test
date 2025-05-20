"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReportedPostModal = dynamic(() => import("./reported-post-modal"), {
  ssr: false,
});

export const Modals = () => {
  return (
    <>
      <ReportedPostModal />
    </>
  );
};
