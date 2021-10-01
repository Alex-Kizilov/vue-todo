module.exports = {
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src")
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
};