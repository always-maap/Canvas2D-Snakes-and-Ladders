import create from "zustand";
import { combine } from "zustand/middleware";

export const useTheme = create(
  combine({ theme: globalThis.window ? window.localStorage.getItem("theme") : "light" }, (set) => ({
    toggle: () => {
      set((state) => {
        window.localStorage.setItem("theme", state.theme === "light" ? "dark" : "light");
        return {
          theme: state.theme === "light" ? "dark" : "light",
        };
      });
    },
  }))
);
