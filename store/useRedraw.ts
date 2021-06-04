import { combine } from "zustand/middleware";
import create from "zustand";

export const useRedraw = create(
  combine({ size: 1000 }, (set) => ({
    redraw: (width: number, height: number) => {
      console.log("yo");
      if (width < 768) {
        set((state) => {
          return { size: 700 };
        });
      } else if (width < 576) {
        set((state) => {
          return { size: 500 };
        });
      } else {
        set((state) => {
          return { size: 300 };
        });
      }
    },
  }))
);
