import { defineConfig } from "vite";
// import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // this didnt work, I dont know how it works
  // build: {
  //   lib: {
  //     // Could also be a dictionary or array of multiple entry points
  //     entry: resolve(__dirname, 'src/main.ts'),
  //     name: 'MyLib',
  //     // the proper extensions will be added
  //     fileName: 'my-lib',
  //   },
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled
  //     // into your library
  //     // external: ['vue'],
  //     output: {
  //       // Provide global variables to use in the UMD build
  //       // for externalized deps
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "vue-bundle.js",
        name: "VueNavApp",
      },
    },
    // doesnt work completely - doesnt mangle function names
    // but had problems with const, let and var
    // minify: "terser",
    // terserOptions: {
    //   mangle: {
    //     keep_fnames: true,
    //   },
    // },
  },
});
