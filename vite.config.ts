import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
  ],
  server: {
    host: "0.0.0.0",
    // 是否主动唤醒浏览器
    open: false,
    cors: true, // 允许跨域
    proxy: {
      "/api": {
        // target: "http://192.168.7.244:9005/lowcode-test", // 后台接口
        target: "http://192.168.7.244:5000/",
        changeOrigin: true, // 是否允许跨域
        // secure: false,                    // 如果是https接口，需要配置这个参数
        rewrite: (path: any) => path.replace(/^\/api/, ""),
      },
    },
  },
});
