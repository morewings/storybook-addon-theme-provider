import type { FC } from "react";
import React, { ReactNode } from "react";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
  ReactJSXElement,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";
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
    const [{ themes }] = useGlobals();
    // const { themes } = useGlobalThemesPreview();

    // @ts-ignore
    const selectedTheme = themes.find(({ selected }) => selected);

    return <Provider theme={selectedTheme}>{StoryFn()}</Provider>;
  };
