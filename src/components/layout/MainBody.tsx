import classNames from "classnames";

import { MainBodyProps } from "types/components/layout";

import useLayoutStore from "store/layout/layoutStore";

const MainBody = ({ children }: MainBodyProps) => {
  const sidebarOpen = useLayoutStore((state) => state.sidebarOpen);
  const sidebarNarrow = useLayoutStore((state) => state.sidebarNarrow);

  return (
    <div
      id="main-body"
      className={classNames("bg-light", {
        full: !sidebarOpen,
        narrow: sidebarNarrow,
      })}
    >
      {children}
    </div>
  );
};

export default MainBody;
