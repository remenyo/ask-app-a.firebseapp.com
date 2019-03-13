module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
  css: {
    extract: false,
  },

  pwa: {
    name: 'App-a!',
    themeColor: '#5E0691',
    msTileColor: '#6500A0',
    appleMobileWebAppStatusBarStyle: 'standalone',
    workboxOptions: {
      clientsClaim: 'true',
      skipWaiting: 'true',
    },
  },

  lintOnSave: undefined,
};
