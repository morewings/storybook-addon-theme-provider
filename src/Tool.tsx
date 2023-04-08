import React, {
  memo,
  useCallback,
  useEffect,
  FC,
  Children,
  ReactElement,
  cloneElement,
  useState,
} from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import {
  Icons,
  IconButton,
  TooltipLinkList,
  TooltipNote,
  WithTooltipPure,
  ListItem,
} from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";

import { useGlobalThemesManager } from "./useGlobalThemes";
import { useToggle } from "./useToggle";

export type ThemeType = {
  name: string;
  color?: string;
  selected?: boolean;
  themeObject: Record<string, unknown>;
};

const ThemeList: FC<{
  themes?: ThemeType[];
  onSelect: (name: string) => void;
}> = ({ themes, onSelect }) => {
  const hasThemes = !!themes && Array.isArray(themes);
  return (
    <div>
      {hasThemes &&
        themes.map(({ name, color }) => {
          return (
            <ListItem
              onSelect={(e) => {
                console.log("select", e);
              }}
              onClick={() => {
                onSelect(name);
              }}
              key={name}
              title={name}
              right={<div>{color}</div>}
            />
          );
        })}
    </div>
  );
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
  const [globals, updateGlobals] = useGlobals();
  const { themes, updateThemes } = useGlobalThemesManager();
  const {isActive, toggleThemeButton} = useToggle()

  // const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  // const toggleMyTool = useCallback(() => {
  //   updateGlobals({
  //     [PARAM_KEY]: !isActive,
  //   });
  // }, [isActive]);

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
