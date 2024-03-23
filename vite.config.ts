import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
// @ts-expect-error no types
import external from '@yelo/rollup-node-external';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({rollupTypes: true, exclude: ['**/*.stories.(ts|tsx)']})],
  build: {
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ['src/index.ts', 'src/preview.ts', 'src/manager.ts'],
      name: 'storybook-addon-theme-provider',
      formats:['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: external(),
    },
  },
});
