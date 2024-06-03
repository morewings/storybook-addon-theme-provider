import type { FC } from "react";
import React, { ReactNode } from "react";
import { useGlobalThemesPreview } from "./useGlobalThemes";

export const withThemeProvider =
  <TTheme,>(Provider: FC<{ children?: ReactNode; theme?: TTheme }>) =>
  (
    Story: FC
  ) => {
    const { themes = [], selectedTheme } = useGlobalThemesPreview();

    const selectedThemeData = themes.find(
      ({ name }) => Boolean(selectedTheme) && name === selectedTheme
    );

    return (
      <Provider theme={selectedThemeData?.themeObject}><Story /></Provider>
    );
  };
