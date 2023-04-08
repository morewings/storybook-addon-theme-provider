import React, { FC } from "react";
import { styled, themes, convert } from "@storybook/theming";

const gradient =
  "linear-gradient(-45deg, transparent, transparent 45%, pink 45%, pink 55%, transparent 55%, transparent 100%)";

export const Color: FC<{ colorName?: string }> = ({ colorName = gradient }) => {
  return <ColorDiv style={{ background: colorName }} />;
};

export const ColorDiv = styled.div({
  width: "16px",
  height: "16px",
  "border-radius": "8px",
  border: "1px solid lightgray",
});
