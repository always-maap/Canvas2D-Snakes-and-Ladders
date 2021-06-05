import create from "zustand";
import { combine } from "zustand/middleware";
import { BREAKPOINTS } from "../theme/breakpoints";

export const useRedraw = create(
  combine({ size: BREAKPOINTS.lg }, (set) => ({
    redraw: (width: number) => {
      let newSize = BREAKPOINTS.lg;
      if (width < BREAKPOINTS.sm) {
        newSize = BREAKPOINTS.xs;
      } else if (width > BREAKPOINTS.sm && width < BREAKPOINTS.md) {
        newSize = BREAKPOINTS.sm;
      } else if (width > BREAKPOINTS.md && width < BREAKPOINTS.lg) {
        newSize = BREAKPOINTS.md;
      } else {
        newSize = BREAKPOINTS.lg;
      }
      set(() => ({ size: newSize }));
    },
  }))
);
