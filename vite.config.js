import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
const path = require("path");

export default defineConfig({
    plugins: [laravel(["resources/js/app.jsx"])],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: "../dist",
    },
    server: {
        port: 8080,
    },
});
