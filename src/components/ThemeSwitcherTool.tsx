import React, { memo, useCallback } from "react";
import { IconButton, WithTooltipPure } from "@storybook/components";
import { Palette } from "@phosphor-icons/react";

import { TOOL_ID } from "../constants";
import { ThemeList } from "./ThemeList";
import { useGlobalThemesManager } from "../features/useGlobalThemes";

export type ThemeType = {
  name: string;
  color?: string;
  selected?: boolean;
  themeObject: Record<string, unknown>;
};

export const ThemeSwitcherTool = memo(function MyAddonSelector() {
  const { themes, setSelectedTheme } = useGlobalThemesManager();

  const handleSelect = useCallback(
    (name: string) => {
      setSelectedTheme(name);
    },
    [themes],
  );

  return (
    <WithTooltipPure
      trigger="click"
      closeOnTriggerHidden={true}
      closeOnOutsideClick={true}
      tooltip={<ThemeList onSelect={handleSelect} themes={themes} />}
    >
      <IconButton key={TOOL_ID} title="Switch theme">
        <Palette size={16} color="#73828c" weight="fill" />
      </IconButton>
    </WithTooltipPure>
  );
});
