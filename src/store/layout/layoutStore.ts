import { create } from "zustand";

import { LayoutStoreState } from "types/store/layout/layout";

import { layoutSlice } from "./layoutSlice";

const useLayoutStore = create<LayoutStoreState>()((...a) => ({
  ...layoutSlice(...a),
}));

export default useLayoutStore;
