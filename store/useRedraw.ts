import { combine } from "zustand/middleware";
import create from "zustand";

export const useRedraw = create(
  combine({ size: 900 }, (set) => ({
    redraw: (width: number) => {
      let newSize = 900;
      if (width < 360) {
        newSize = 300;
      } else if (width > 360 && width < 576) {
        newSize = 360;
      } else if (width > 576 && width < 768) {
        newSize = 576;
      } else if (width > 768 && width < 1024) {
        newSize = 768;
      } else {
        newSize = 900;
      }
      set(() => ({ size: newSize }));
    },
  }))
);
