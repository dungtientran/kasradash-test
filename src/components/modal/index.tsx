"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReportedPostModal = dynamic(() => import("./reported-post-modal"), {
  ssr: false,
});

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);
  return (
    <>
      <ReportedPostModal />
    </>
  );
};
