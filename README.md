# Storybook Addon Theme Provider

[![storybook addon](https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg)](https://storybook.js.org/addons/storybook-addon-theme-provider)
[![npm version](https://badge.fury.io/js/storybook-addon-theme-provider.svg)](https://www.npmjs.com/package/storybook-addon-theme-provider)
[![npm](https://img.shields.io/npm/dm/storybook-addon-theme-provider)](https://www.npmcharts.com/compare/storybook-addon-theme-provider?interval=7)
[![GitHub package.json dynamic](https://img.shields.io/github/package-json/types/morewings/storybook-addon-theme-provider)](https://github.com/morewings/storybook-addon-theme-provider)
[![GitHub Repo stars](https://img.shields.io/github/stars/morewings/storybook-addon-theme-provider?style=social)](https://github.com/morewings/storybook-addon-theme-provider)

## Maintainer's personal appeal to the users

Hi, my name is Dima. I created this Storybook add-on. Thanks for choosing it for your project. Hope it helps you to achieve your goals and implement your ideas.

At this moment I'm looking for as job as a **Lead/Senior Front Developer in Berlin, Germany**. So I would like to ask you to **refer me to your company** if this is relevant to your case. Here you can find my [CV and portfolio](https://links.morewings.dev/). In case it is not relevant, giving a star 🌟 to add-on [repo](https://github.com/morewings/storybook-addon-theme-provider) is also appreciated. I believe that having a popular open source project is helpful for a job search.

Thanks and happy coding!

## Intro

Add-on to manage global themes provided by Styled components, Emotion, or any other solution based on a React component, which receives prop `theme?: Record<string, unknown>` and children node. This add-on is compatible with **Storybook versions 7 and 8**.

Inspired by [storybook-addon-themes](https://github.com/tonai/storybook-addon-themes).

<img src="./addon-demo-high.gif" alt="Storybook Addon theme-provider" width="436" height="234">

## Install

1. Install add-on with the package manager of your choice.

```shell
npm i -D storybook-addon-theme-provider
yarn add -D storybook-addon-theme-provider
pnpm i -D storybook-addon-theme-provider
```

2. Register add-on in `.storybook/main.(js|ts)`

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

It is also possible to enable decorator on the story level.

```js
// some CSF story file

export const story = {
  decorators: [withThemeProvider(Provider)]
};
```

## Use `Provider` component

`Provider` is a React component which receives `theme` prop, containing a selected theme object, and `children` nodes. See [Styled component theming](https://styled-components.com/docs/advanced#theming) or [Emotion
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



