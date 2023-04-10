/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { Renderer, ProjectAnnotations } from "@storybook/types";
import { withThemeProvider } from "./features/withThemeProvider";
import {MockProvider} from './components/MockProvider';

/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */

const preview: ProjectAnnotations<Renderer> = process.env.NODE_ENV === 'development' ? {
  decorators: [withThemeProvider(MockProvider)],
  globals: {
    selectedTheme: 'foo',
    themes: [
      {
        name: 'foo',
        color: '#1ea7fd',
        themeObject: {
          name: 'foo'
        }
      },
      {
        name: 'bar',
        color: '#abfd1e',
        themeObject: {
          name: 'bar'
        }
      }
    ]
  },
} : {};

export default preview;
