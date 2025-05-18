import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IS0Sibar {
  opened: boolean;
  toggle: () => void;

  title: string;
  setTitle: (newTitle: string) => void;

  groupMenuOpenId: string[];
  toggleGroupMenuOpenId: (id: string) => void;
  clearGroupMenuOpenId: () => void;

  menuCode?: string;
  setMenuCode: (newMenuCode: string) => void;

  status?: string | undefined;
  setStatus: (newStatus: string | undefined) => void;

  description?: string | undefined;
  setDescription: (newDescription: string | undefined) => void;
}

export const useS0Sidebar = create<IS0Sibar>()(
  persist(
    (set, get) => ({
      opened: true,
      toggle: () => {
        set({ opened: !get().opened });
      },

      title: "",
      setTitle: (newTitle) => {
        set({ title: newTitle });
      },
      groupMenuOpenId: [],
      toggleGroupMenuOpenId: (id) => {
        const currentIds = get().groupMenuOpenId;
        if (currentIds.includes(id)) {
          // Nếu id đã tồn tại, xóa nó
          set({
            groupMenuOpenId: currentIds.filter((existingId) => existingId !== id),
          });
        } else {
          // Nếu id chưa tồn tại, thêm vào
          set({ groupMenuOpenId: [...currentIds, id] });
        }
      },
      clearGroupMenuOpenId: () => {
        set({ groupMenuOpenId: [] });
      },
      menuCode: "",
      setMenuCode: (newMenuCode) => {
        set({ menuCode: newMenuCode });
      },
      status: "",
      setStatus: (newStatus) => {
        set({ status: newStatus });
      },
      description: "",
      setDescription: (newDescription) => {
        set({ description: newDescription });
      }
    }),
    { name: "S0Sidebar" }
  )
);
