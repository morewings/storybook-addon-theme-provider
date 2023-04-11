# Storybook Addon Theme Provider

[![storybook addon](https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg)](https://storybook.js.org/addons/storybook-addon-theme-provider)
[![npm version](https://badge.fury.io/js/storybook-addon-theme-provider.svg)](https://www.npmjs.com/package/storybook-addon-theme-provider)
[![npm](https://img.shields.io/npm/dm/storybook-addon-theme-provider)](http://npm-stats.org/#/storybook-addon-theme-provider)
[![GitHub Repo stars](https://img.shields.io/github/stars/morewings/storybook-addon-theme-provider?style=social)](https://github.com/morewings/storybook-addon-theme-provider)

Addon to manage global themes provided by Styled components, Emotion or any other solution based on React component, which receives prop `theme?: Record<string, unknown>` and children node(s). **This addon is compatible with Storybook version 7.**

<img src="./addon-demo-high.gif" alt="Storybook Addon theme-provider" width="429" height="234">

## Install

1. Install addon with the package manager of your choice.

```shell
npm i -D storybook-addon-theme-provider
yarn add -D storybook-addon-theme-provider
pnpm i -D storybook-addon-theme-provider
```

2. Register addon in `.storybook/main.(js|ts)`

```js
export default {
    //...
    addons: [
        //...
        "storybook-addon-theme-provider",
        //...
    ],
};
```

## Use themes

Add decorator `withThemeProvider` to `.storybook/preview.(js|ts)`. This applies theme settings on **global level**.

```js
import {withThemeProvider} from 'storybook-addon-theme-provider';
import {Provider} from './Provider';

export default {
    //...
    decorators:[
        withThemeProvider(Provider),
        ///...
    ],
    globals: {
        // Set initially selected theme name
        selectedTheme: 'foo',
        // Provide a list of available themes
        themes: [
            {
                // Provide a name for the theme.
                name: 'foo',
                // Set a color to display after theme name
                color: 'red',
                // Provide object with foo theme data
                themeObject: {
                    baseColor: 'red',
                    //...
                }
            },
            {
                name: 'bar',
                color: '#AAAAAA',
                themeObject: {
                    baseColor: 'green',
                }
            }
        ]
    },
    //...
}
```

It's also possible to enable decorator on story level.

```js
// some CSF story file

export const story = {
  decorators: [withThemeProvider(Provider)]
};
```

## Use `Provider` component

`Provider` is a React component which receives `theme` prop, containing selected theme object, and `children` nodes. See [Styled component theming](https://styled-components.com/docs/advanced#theming) or [Emotion
ThemeProvider](https://emotion.sh/docs/theming#themeprovider-reactcomponenttype).

Developer can use custom `Provider` component as well.

```tsx
import React, {FC, ReactNode} from 'react';

export const Provider: FC<{theme: unknown; children?: ReactNode}> = ({theme, children}) => {
    // apply theme somehow
    return <div>{children}</div>
}
```



