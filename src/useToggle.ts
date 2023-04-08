import { useGlobals } from '@storybook/manager-api';
import { useCallback } from 'react';

import { PARAM_KEY } from './constants';

export const useToggle = () => {
    const [globals, updateGlobals] = useGlobals();

    const isActive = [true, "true"].includes(globals[PARAM_KEY]);

    const toggleThemeButton = useCallback(() => {
        updateGlobals({
            [PARAM_KEY]: !isActive,
        });
    }, [isActive, updateGlobals]);

    return {isActive, toggleThemeButton}
}
