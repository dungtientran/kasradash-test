"use client";

import React, { useCallback, useState } from "react";
import { PendingItem } from "@/types/dashboard";
import { PendingListSection } from "@/components/pending-section/pending-list-section";
import { PendingItemCard } from "@/components/pending-section/pendingItem-card";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modal/confirm-modal";

const data: PendingItem[] = [
  { id: 1, name: "Event 1", description: "Waiting approval" },
  {
    id: 2,
    name: "Event 2",
    description:
      "Waiting approval Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est placeat, dolorem totam nulla ducimus eligendi vitae voluptatem, magni neque facere, ea ipsam corporis. Reprehenderit eaque repellendus quas debitis nesciunt!",
  },
  { id: 3, name: "Event 3", description: "Waiting approval" },
  { id: 4, name: "Event 4", description: "Waiting approval" },
  { id: 5, name: "Event 5", description: "Waiting approval" },
  { id: 6, name: "Event 6", description: "Waiting approval" },
];

export const PendingEvents = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "approve" | "reject" | null
  >(null);
  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null);

  const handleOpenModal = (action: "approve" | "reject", item: PendingItem) => {
    setSelectedAction(action);
    setSelectedItem(item);
    setOpen(true);
  };

  const handleConfirm = useCallback(async () => {
    if (!selectedItem || !selectedAction) return;

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
      setOpen(false);
    } finally {
      setLoading(false);
      setSelectedItem(null);
      setSelectedAction(null);
    }
  }, [selectedItem, selectedAction]);

  return (
    <>
      <PendingListSection
        items={data}
        title="Pending Events"
        renderItem={(item) => (
          <PendingItemCard
            key={item.id}
            title={item.name}
            description={item?.description}
            actions={
              <>
                <Button
                  size="sm"
                  onClick={() => handleOpenModal("approve", item)}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleOpenModal("reject", item)}
                >
                  Reject
                </Button>
              </>
            }
          />
        )}
      />

      <ConfirmModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelectedAction(null);
          setSelectedItem(null);
        }}
        onConfirm={handleConfirm}
        loading={loading}
        title={
          selectedAction && selectedItem
            ? `${
                selectedAction.charAt(0).toUpperCase() + selectedAction.slice(1)
              } ${selectedItem.name}`
            : "Confirm Action"
        }
        description={`Are you sure you want to ${selectedAction} ${selectedItem?.name}?`}
      />
    </>
  );
};
