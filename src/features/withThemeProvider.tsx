import type { FC } from "react";
import React, { ReactNode } from "react";
import type {
  PartialStoryFn as StoryFunction,
  ReactJSXElement,
} from "@storybook/types";
import { useGlobalThemesPreview } from "./useGlobalThemes";

export const withThemeProvider =
  <TTheme,>(Provider: FC<{ children?: ReactNode; theme?: TTheme }>) =>
  (
    StoryFn: StoryFunction<{
      component: FC;
      storyResult: ReactJSXElement;
      canvasElement: unknown;
    }>
  ) => {
    const { themes = [], selectedTheme } = useGlobalThemesPreview();

    const selectedThemeData = themes.find(
      ({ name }) => Boolean(selectedTheme) && name === selectedTheme
    );

    return (
      <Provider theme={selectedThemeData?.themeObject}>{StoryFn()}</Provider>
    );
  };
