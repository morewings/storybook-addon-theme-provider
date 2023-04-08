import React, { FC } from 'react';
import { ListItem } from '@storybook/components';
import { ThemeType } from '../Tool';
import { useGlobalThemesManager } from '../useGlobalThemes';
import {Color} from './Color';

export const ThemeList: FC<{
    themes?: ThemeType[];
    onSelect: (name: string) => void;
}> = ({ themes, onSelect }) => {
    const { selectedTheme } = useGlobalThemesManager();
    const hasThemes = !!themes && Array.isArray(themes);
    return (
        <div>
            {hasThemes &&
                themes.map(({ name, color }) => {
                    return (
                        <ListItem
                            active={selectedTheme === name}
                            onClick={() => {
                                onSelect(name);
                            }}
                            key={name}
                            title={name}
                            right={<Color colorName={color} />}
                        />
                    );
                })}
        </div>
    );
};
