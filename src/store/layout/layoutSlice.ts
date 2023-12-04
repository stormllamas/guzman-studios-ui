import { StateCreator } from "zustand";

import { LayoutStore } from "types/store/layout/layout";

const layoutSlice: StateCreator<LayoutStore> = (set) => ({
  sidebarOpen: true,
  updateSidebarOpen: (sidebarOpen) => set(() => ({ sidebarOpen })),

  sidebarNarrow: true,
  updateSidebarNarrow: (sidebarNarrow) => set(() => ({ sidebarNarrow })),
});

export { layoutSlice };
