# Storybook Addon Theme Provider

[![storybook addon](https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg)](https://storybook.js.org/addons/storybook-addon-theme-provider)
[![npm version](https://badge.fury.io/js/storybook-addon-theme-provider.svg)](https://www.npmjs.com/package/storybook-addon-theme-provider)
[![npm](https://img.shields.io/npm/dm/storybook-addon-theme-provider)](http://npm-stats.org/#/storybook-addon-theme-provider)
[![GitHub package.json dynamic](https://img.shields.io/github/package-json/types/morewings/storybook-addon-theme-provider)](https://github.com/morewings/storybook-addon-theme-provider)
[![GitHub Repo stars](https://img.shields.io/github/stars/morewings/storybook-addon-theme-provider?style=social)](https://github.com/morewings/storybook-addon-theme-provider)

<div style='background-color:#ebffd1; border-left: solid #6bb21d 4px; padding:0.7em;'>
<span>
<p style='margin-top:1em; text-align:center'>
<b>Maintainer's personal appeal to the users</b></p>
<p style='margin-left:1em;'>
Hi, my name is Dima.
I created this Storybook add-on.
Thanks for choosing it for your project.
Hope it helps you to achieve your goals and implement your ideas. 
</p>
<p style='margin-left:1em;'>
At this moment I'm looking for as job as a Lead/Senior front developer in Berlin, Germany.
So I would like to ask you to <strong>refer me to your company</strong> if this is relevant to your case.
Here you can find my <strong><a href="https://linktr.ee/morewings">CV and portfolio</a></strong>.
In case it is not relevant,
giving a star 🌟 to this <strong><a href="https://github.com/morewings/storybook-addon-theme-provider">repo</a></strong> is also appreciated.
I believe that having popular open source repo helps job search.
</p>
<p style='margin-left:1em;'>Thanks and happy coding!</p>
</span>
</div>

Addon to manage global themes provided by Styled components, Emotion or any other solution based on React component, which receives prop `theme?: Record<string, unknown>` and children node(s). This addon is compatible with **Storybook versions 7 and 8**.

Inspired by [storybook-addon-themes](https://github.com/tonai/storybook-addon-themes).

<img src="./addon-demo-high.gif" alt="Storybook Addon theme-provider" width="420" height="200">

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
import React, {ReactNode} from 'react';

export const Provider = <TTheme,>({children, theme}: {children?: ReactNode; theme?: TTheme}) => {
    // apply theme somehow
    console.log('theme', theme)
    return <div>{children}</div>
}
```



