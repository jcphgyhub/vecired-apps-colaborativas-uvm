import { create } from "zustand";
import { DEFAULT_DEMO_USER_ID } from "@/mocks/data";

type UIState = {
  mobileOpen: boolean;
  currentDemoUserId: string;
  presentationMode: boolean;
  setMobileOpen: (open: boolean) => void;
  setCurrentDemoUserId: (id: string) => void;
  setPresentationMode: (enabled: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileOpen: false,
  currentDemoUserId: DEFAULT_DEMO_USER_ID,
  presentationMode: false,
  setMobileOpen: (mobileOpen) => set({ mobileOpen }),
  setCurrentDemoUserId: (currentDemoUserId) => set({ currentDemoUserId }),
  setPresentationMode: (presentationMode) => set({ presentationMode }),
}));
