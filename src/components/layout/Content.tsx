import { ContentProps } from "types/components/layout";

const Content = ({ children }: ContentProps) => {
  return <div id="content" className="p-3">{children}</div>;
};

export default Content;
