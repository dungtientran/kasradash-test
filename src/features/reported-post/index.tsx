"use client";

import React from "react";
import { PendingListSection } from "@/components/pending-section/pending-list-section";
import { ReportedPost as ReportedPostType } from "@/types/dashboard";
import { PendingItemCard } from "@/components/pending-section/pendingItem-card";
import { Button } from "@/components/ui/button";
import { useModal } from "@/stores/useModal";

const data: ReportedPostType[] = [
  {
    id: 1,
    title: "Reported Post 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est placeat, dolorem totam nulla ducimus eligendi vitae voluptatem, magni neque facere, ea ipsam corporis. Reprehenderit eaque repellendus quas debitis nesciunt!",
  },
  {
    id: 2,
    title: "Reported Post 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est placeat, dolorem totam nulla ducimus eligendi vitae voluptatem, magni neque facere, ea ipsam corporis. Reprehenderit eaque repellendus quas debitis nesciunt!",
  },
  {
    id: 3,
    title: "Reported Post 3",
    description: "Reported description",
  },
  {
    id: 4,
    title: "Reported Post 4",
    description: "Reported description",
  },
  {
    id: 5,
    title: "Reported Post 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est placeat, dolorem totam nulla ducimus eligendi vitae voluptatem, magni neque facere, ea ipsam corporis. Reprehenderit eaque repellendus quas debitis nesciunt!",
  },
  {
    id: 6,
    title: "Reported Post 6",
    description: "Reported description",
  },
  {
    id: 7,
    title: "Reported Post 7",
    description: "Reported description",
  },
];

export const ReportedPost = () => {
  const { onOpen, onSetReportedPost } = useModal((state) => state);

  const handleClick = (reportedPost: ReportedPostType) => {
    onOpen("view-repored-post");
    onSetReportedPost(reportedPost);
  };

  return (
    <PendingListSection
      title="Reported Post"
      className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 space-y-0 gap-y-3"
      items={data}
      renderItem={(item) => (
        <PendingItemCard
          key={item.id}
          title={item.title}
          description={item?.description}
          actions={
            <Button onClick={() => handleClick({ ...item })} size="sm">
              View
            </Button>
          }
        />
      )}
    />
  );
};
