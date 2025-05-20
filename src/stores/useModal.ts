import { ReportedPost } from "@/types/dashboard";
import { create } from "zustand";

export type ModalType = "view-repored-post";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  reportedPost: ReportedPost | null;

  onOpen: (type: ModalType) => void;
  onClose: () => void;
  onSetReportedPost: (data: ReportedPost | null) => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  reportedPost: null,

  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false, reportedPost: null }),
  onSetReportedPost: (reportedPost) => set({ reportedPost }),
}));
