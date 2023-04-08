import { useGlobals as useGlobalsManager } from "@storybook/manager-api";
import { useGlobals as useGlobalsPreview } from "@storybook/preview-api";
import { useCallback } from "react";
import {ThemeType} from './ThemeType';

export const useGlobalThemesManager = () => {
    const [{themes}, updateGlobals] = useGlobalsManager();
    const updateThemes = useCallback((nextThemes: ThemeType[]) => {
        updateGlobals({themes: nextThemes})
    }, [updateGlobals])

    return { themes, updateThemes };
}

export const useGlobalThemesPreview = () => {
    const [{themes}, updateGlobals] = useGlobalsPreview();
    const updateThemes = useCallback((nextThemes: ThemeType[]) => {
        updateGlobals({themes: nextThemes})
    }, [updateGlobals])

    return { themes, updateThemes };
}
