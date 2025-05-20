import { create } from "zustand";

type FormData = {
  name: string;
  email: string;
  password: string;
};

type FormState = {
  formData: FormData;
  hasChanges: boolean;
  setFormData: (data: FormData) => void;
  setHasChanges: (changed: boolean) => void;
};

const useFormStore = create<FormState>((set) => ({
  formData: { name: "", email: "", password: "" },
  hasChanges: false,
  setFormData: (data) => set({ formData: data, hasChanges: true }),
  setHasChanges: (changed) => set({ hasChanges: changed }),
}));

export default useFormStore;
