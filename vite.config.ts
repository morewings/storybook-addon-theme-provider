import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import external from '@yelo/rollup-node-external';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ['src/index.ts', 'src/preview.ts', 'src/manager.ts'],
      name: 'css-vars-hook',
      formats:['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: external(),
    },
  },
});
