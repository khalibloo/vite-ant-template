import { defineConfig } from "vite";
import * as path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import pages from "vite-plugin-react-pages";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "red",
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),
    pages({
      pagesDir: path.join(__dirname, "src", "pages"),
    }),
  ],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"),
  //   },
  // },
});
