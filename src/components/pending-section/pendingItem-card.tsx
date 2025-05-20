"use client";

import React, { FC, ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PendingItemCardProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const PendingItemCard: FC<PendingItemCardProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Card
      title={title}
      className="flex flex-row items-center justify-between p-4 gap-4"
    >
      <CardHeader className="flex-1 space-y-1">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <div className="flex gap-2">{actions}</div>
    </Card>
  );
};
