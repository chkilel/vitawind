export default ({ command }) => ({
  // please update the path `[chkilel-vitawind]` to your theme folder
  // `/themes/[chkilel-vitawind]/public/build/`
  base: command === "serve" ? "" : "/themes/chkilel-vitawind/public/build/",
  processCssUrls: true,
  build: {
    manifest: true,
    outDir: "public/build",
    rollupOptions: {
      input: [
        "resources/js/app.js",
        "resources/js/home.js",
        // Add here all the files you need if you load different javascript code in each layout
        // 'ressource/js/myFirstAddedFile.js',
        // 'ressource/js/mySecondAddedFile.js',
        // ...
      ],
    },
  },
  plugins: [],
});
