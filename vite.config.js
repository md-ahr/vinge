import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        lib: {
            entry: "./src/js/vinge.js",
            formats: ["es"],
            fileName: "vinge.bundle.min",
        },
        rollupOptions: {
            output: {
                assetFileNames: "vinge.bundle.min.[ext]",
            },
        },
        minify: "terser",
    },
});
