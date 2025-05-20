import React from "react";
import { Container } from "@/components/layout/container";
import { Overview } from "@/features/overview";
import { PendingEvents } from "@/features/pending-events";
import { ReportedPost } from "@/features/reported-post";
import { PendingSuppliers } from "@/features/pending-suppliers";

const DashboardPage = () => {
  return (
    <Container scrollable>
      <div className="w-full space-y-8 lg:space-y-10">
        <Overview />
        <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10">
          <PendingSuppliers />
          <PendingEvents />
        </div>
        <ReportedPost />
      </div>
    </Container>
  );
};

export default DashboardPage;
