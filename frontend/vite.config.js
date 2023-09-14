import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        chunkSplitPlugin()
    ],
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
});
