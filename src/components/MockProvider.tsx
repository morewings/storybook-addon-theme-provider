import React, { FC, ReactNode, useEffect } from "react";

export const MockProvider: FC<{ children?: ReactNode; theme?: any }> = ({
  children,
  theme,
}) => {
  // useEffect(() => {
  //   console.log("theme updated", theme);
  // }, [theme]);
  return <div className={theme.name}>{children}</div>;
};
