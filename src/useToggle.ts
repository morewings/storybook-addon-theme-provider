import { useGlobals } from '@storybook/manager-api';
import { useCallback } from 'react';

import { TOGGLE_PARAMETER } from './constants';

export const useToggle = () => {
    const [globals, updateGlobals] = useGlobals();

    const isActive = [true, "true"].includes(globals[TOGGLE_PARAMETER]);

    const toggleThemeButton = useCallback(() => {
        updateGlobals({
            [TOGGLE_PARAMETER]: !isActive,
        });
    }, [isActive, updateGlobals]);

    return {isActive, toggleThemeButton}
}
