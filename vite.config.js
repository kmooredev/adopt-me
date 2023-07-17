import { defineConfig, loadEnv } from 'vite';
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.CLIENT_ID': JSON.stringify(env.CLIENT_ID),
            'process.env.CLIENT_SECRET': JSON.stringify(env.CLIENT_SECRET)
        },
        plugins: [react()],
        root: "src",
    };
});