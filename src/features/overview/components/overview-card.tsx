"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

import { OverviewItem } from "@/types/dashboard";
import React, { FC } from "react";

export const OverviewCard: FC<OverviewItem> = ({ count, name }) => {
  return (
    <Card
      title={name}
      className="flex-1 flex items-center justify-center gap-2"
    >
      <CardContent>
        <p className="md:text-xl font-semibold ">{formatNumber(count)}</p>
      </CardContent>
      <CardFooter>
        <p className="line-clamp-1 text-sm md:text-base min-w-20">{name}</p>
      </CardFooter>
    </Card>
  );
};
