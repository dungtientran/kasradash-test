import React from "react";
import { OverviewItem } from "@/types/dashboard";
import { OverviewCard } from "./components/overview-card";

const overviewData: OverviewItem[] = [
  { id: 1, name: "Submissions", count: 80 },
  { id: 2, name: "Total User", count: 15000 },
  { id: 3, name: "Active Posts", count: 240 },
  { id: 4, name: "Reported Content", count: 2000000 },
];

export const Overview: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 lg:gap-10">
      {overviewData.map((item) => (
        <OverviewCard key={item.id} {...item} />
      ))}
    </div>
  );
};
