# Storybook Addon theme-provider

[![npm version](https://badge.fury.io/js/storybook-addon-theme-provider.svg)](https://www.npmjs.com/package/storybook-addon-theme-provider)
[![npm](https://img.shields.io/npm/dm/storybook-addon-theme-provider)](http://npm-stats.org/#/storybook-addon-theme-provider)
[![storybook addon](https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg)](https://storybook.js.org/addons/storybook-addon-theme-provider)

Addon to manage global themes provided by Styled components, Emotion, React e. t. c. **This version is compatible Storybook version 7.**

<img src="./addon-demo.gif" alt="Storybook Addon theme-provider" width="430" height="234">

## Install

1. Install addon with the package manager of your choice.

```shell
npm i -D storybook-addon-theme-provider
yarn add -d storybook-addon-theme-provider
pnpm i -Dstorybook-addon-theme-provider
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

Add decorator `withThemeProvider` to `.storybook/preview.ts`.

`Provider` is a React component which receives `theme` props containing selected theme object. See [Styled component theming](https://styled-components.com/docs/advanced#theming) or [Emotion
ThemeProvider](https://emotion.sh/docs/theming#themeprovider-reactcomponenttype).

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
        // Initial selected theme name
        selectedTheme: 'foo',
        // List of available themes
        themes: [
            {
                // Provide name for the theme.
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

```tsx
import React, {FC, ReactNode} from 'react';

export const Provider: FC<{theme: unknown; children?: ReactNode}> = ({theme, children}) => {
    // apply theme somehow
    return <div>{children}</div>
}
```

It's also possible to enable decorator on specific story level.

```js
// some CSF story file

export const story = {
  decorators: [withThemeProvider(Provider)]
};
```



