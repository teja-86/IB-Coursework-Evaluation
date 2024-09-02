import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFileStore = create()(
  persist(
    (set) => ({
      files: [],
      addFile: (file) =>
        set((state) => ({
          files: [...state.files, file],
        })),
      removeFile: (id) =>
        set((state) => ({
          files: state.files.filter((file) => file.id !== id),
        })),
    }),
    {
      name: "file-storage", // key for local storage
    }
  )
);
