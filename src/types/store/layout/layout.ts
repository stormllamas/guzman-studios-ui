export type LayoutStore = {
  sidebarOpen: boolean;
  updateSidebarOpen: (sidebarOpen: boolean) => void;

  sidebarNarrow: boolean;
  updateSidebarNarrow: (sidebarNarrow: boolean) => void;
};

export type LayoutStoreState = LayoutStore;
