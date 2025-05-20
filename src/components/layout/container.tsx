import React, { FC, ReactNode } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface ContainerProps {
  children: ReactNode;
  scrollable?: boolean;
}

export const Container: FC<Readonly<ContainerProps>> = ({
  children,
  scrollable,
}) => {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100vh-72px)] ">
          <div className="flex flex-1 p-4 md:px-6 w-full">{children}</div>
        </ScrollArea>
      ) : (
        <div className="flex flex-1 p-4 md:px-6 w-full">{children}</div>
      )}
    </>
  );
};
