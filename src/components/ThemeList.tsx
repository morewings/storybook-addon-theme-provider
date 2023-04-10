import React, { FC } from "react";
import {
  ListItem,
  TooltipNote,
  Span,
  TooltipMessage,
} from "@storybook/components";
import { ThemeConfigType } from "../features/ThemeConfigType";
import { useGlobalThemesManager } from "../features/useGlobalThemes";
import { Color } from "./Color";

export const ThemeList: FC<{
  themes?: ThemeConfigType[];
  onSelect: (name: string) => void;
}> = ({ themes, onSelect }) => {
  const { selectedTheme } = useGlobalThemesManager();
  const hasConfig = (Boolean(themes) && Array.isArray(themes)) && Boolean(selectedTheme)
  return hasConfig ? (
    <div>
      {themes.map(({ name, color }) => {
        return (
          <ListItem
            active={selectedTheme === name}
            onClick={() => {
              onSelect(name);
            }}
            key={name}
            title={name}
            right={<Color colorName={color} />}
          />
        );
      })}
    </div>
  ) : (
    <TooltipMessage
      title="Missing theme config"
      desc="Add themes list and selected theme to .storybook/preview.js"
    />
  );
};
