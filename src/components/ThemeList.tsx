import React, { FC } from 'react';
import { ListItem } from '@storybook/components';
import { ThemeType } from '../Tool';

export const ThemeList: FC<{
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
