"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface PendingListSectionProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export const PendingListSection = <T,>({
  title,
  items,
  className,
  renderItem,
}: PendingListSectionProps<T>) => {
  return (
    <div className="space-y-5 flex flex-col">
      <p className="text-xl lg:text-2xl">{title}</p>
      <ScrollArea className="max-h-[300px]">
        <div className={cn("space-y-3", className)}>
          {items.map(renderItem)}
        </div>
      </ScrollArea>
    </div>
  );
};
