import React, { FC, ReactNode, useEffect } from "react";

export const MockProvider: FC<{ children?: ReactNode; theme?: any }> = ({
  children,
  theme,
}) => {
  // console.log("initial theme", theme);
  useEffect(() => {
    console.log("theme updated", theme);
  }, [theme]);
  return <div className="foo">{children}</div>;
};
