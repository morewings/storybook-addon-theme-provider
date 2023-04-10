import { useGlobals as useGlobalsManager } from "@storybook/manager-api";
import { useGlobals as useGlobalsPreview } from "@storybook/preview-api";
import { useCallback } from "react";
import {ThemeType} from './ThemeType';

export const useGlobalThemesManager = (): {
    themes: ThemeType[];
    selectedTheme: string;
    setSelectedTheme: (nextTheme: string) => void
} => {
    const [{themes, selectedTheme}, updateGlobals] = useGlobalsManager();

    const setSelectedTheme = useCallback((nextTheme: string) => {
        updateGlobals({selectedTheme: nextTheme})
    }, [updateGlobals])

    return { themes, setSelectedTheme, selectedTheme};
}

export const useGlobalThemesPreview = (): {
    selectedTheme: string;
    themes: ThemeType[]
} => {
    const [{themes, selectedTheme}] = useGlobalsPreview();

    return { themes, selectedTheme };
}
