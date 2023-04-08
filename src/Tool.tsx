import React, {
  memo,
  useCallback,
  FC,
} from "react";
import {
  Icons,
  IconButton,
  WithTooltipPure,
} from "@storybook/components";

import { TOOL_ID } from "./constants";
import {ThemeList} from './components/ThemeList';
import { useGlobalThemesManager } from "./useGlobalThemes";
import { useToggle } from "./useToggle";

export type ThemeType = {
  name: string;
  color?: string;
  selected?: boolean;
  themeObject: Record<string, unknown>;
};

const updateSelectedTheme = (
  themes: ThemeType[],
  name: string
): ThemeType[] => {
  return themes.map((theme) => {
    return { ...theme, selected: theme.name === name };
  });
};

export const Tool = memo(function MyAddonSelector() {
  const { themes, updateThemes } = useGlobalThemesManager();
  const {isActive, toggleThemeButton} = useToggle()

  const handleSelect = useCallback(
    (name: string) => {
      updateThemes(updateSelectedTheme(themes, name));
    },
    [themes, updateThemes]
  );

  return (
    <WithTooltipPure
      tooltip={<ThemeList onSelect={handleSelect} themes={themes} />}
    >
      <IconButton
        key={TOOL_ID}
        active={isActive}
        title="Enable my addo asd"
        onClick={toggleThemeButton}
      >
        <Icons icon="mirror" />
      </IconButton>
    </WithTooltipPure>
  );
});
