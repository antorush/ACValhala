import type { TContainer } from "../../types/types";

const Container: React.FC<TContainer> = ({
  maxWidth = "1600",
  padding = "32",
  children,
}) => {
  return (
    <div
      className={`block mx-auto`}
      style={{ maxWidth: `${maxWidth}px`, padding: `0px ${padding}px` }}
    >
      {children}
    </div>
  );
};

export default Container;
