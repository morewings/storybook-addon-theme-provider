import type { FC } from "react";
import React, { ReactNode, memo } from "react";
import type {
  PartialStoryFn as StoryFunction,
  ReactJSXElement,
} from "@storybook/types";
import {useGlobalThemesPreview} from './useGlobalThemes';

export const withThemeProvider =
  <TTheme,>(Provider: FC<{ children?: ReactNode; theme?: TTheme }>) =>
  (
    StoryFn: StoryFunction<{
      component: FC;
      storyResult: ReactJSXElement;
      canvasElement: unknown;
    }>
  ) => {
    const { themes } = useGlobalThemesPreview();

    // @ts-ignore
    const selectedTheme = themes.find(({ selected }) => selected);

    return <Provider theme={selectedTheme}>{StoryFn()}</Provider>;
  };
