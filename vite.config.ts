import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'VoxgigModelReact',
      formats: ['es', 'umd'],
      fileName: (format) => `voxgig-model-react.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'react-redux',
        'react-router-dom',
        '@emotion/react',
        '@emotion/styled',
        '@fontsource/roboto',
        '@mdi/js',
        '@mdi/react',
        '@mui/icons-material',
        '@mui/material',
        '@mui/x-data-grid'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
