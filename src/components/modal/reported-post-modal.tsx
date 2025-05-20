import React from "react";
import { useModal } from "./hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
const ReportedPostModal = () => {
  const { isOpen, type, reportedPost, onClose } = useModal((state) => state);

  const modalOpen = isOpen && type === "view-repored-post";

  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{reportedPost?.title}</DialogTitle>
          <DialogDescription>{reportedPost?.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReportedPostModal;
