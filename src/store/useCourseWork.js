import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCourseworkStore = create()(
  persist(
    (set) => ({
      courseworkList: [],
      addCoursework: (coursework) => {
        set((state) => ({
          courseworkList: [...state.courseworkList, coursework],
        }));
      },
    }),
    {
      name: "coursework-storage", // key for local storage
    }
  )
);
