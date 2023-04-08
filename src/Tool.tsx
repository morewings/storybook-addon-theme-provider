import React, {
  memo,
  useCallback,
} from "react";
import {
  Icons,
  IconButton,
  WithTooltipPure,
} from "@storybook/components";

import { TOOL_ID } from "./constants";
import {ThemeList} from './components/ThemeList';
import { useGlobalThemesManager } from "./useGlobalThemes";

export type ThemeType = {
  name: string;
  color?: string;
  selected?: boolean;
  themeObject: Record<string, unknown>;
};

export const Tool = memo(function MyAddonSelector() {
  const { themes, setSelectedTheme } = useGlobalThemesManager();

  const handleSelect = useCallback(
    (name: string) => {
      setSelectedTheme(name)
    },
    [themes]
  );

  return (
    <WithTooltipPure
      tooltip={<ThemeList onSelect={handleSelect} themes={themes} />}
    >
      <IconButton
        key={TOOL_ID}
        title="Switch theme"
      >
        <Icons icon="mirror" />
      </IconButton>
    </WithTooltipPure>
  );
});
