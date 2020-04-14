const {
  override,
  fixBabelImports,
  addLessLoader,
  overrideDevServer,
  addWebpackAlias,
} = require("customize-cra");
// const rewireLess = require("react-app-rewire-less");
const path = require("path");
const pxToVw = () => (config) => {
  require("react-app-rewire-postcss")(config, {
    plugins: (loader) => [
      require("postcss-flexbugs-fixes"),
      require("postcss-preset-env")({
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
      }),
      require("postcss-aspect-ratio-mini")({}),
      require("postcss-px-to-viewport")({
        viewportWidth: 750, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: "vw", // (String) Expected units.
        selectorBlackList: [".ignore", ".hairlines"], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
        exclude: /(\/|\\)(node_modules)(\/|\\)/, //忽略第三方UI库样式
      }),
      require("postcss-write-svg")({
        utf8: false,
      }),
      require("postcss-viewport-units")({}),
      require("cssnano")({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false,
      }),
    ],
  });
  return config;
};
// 跨域配置
const devServerConfig = () => (config) => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      "/api": {
        target: "http://23.105.194.254:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  };
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      libraryDirectory: "es",
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@brand-primary": "#b3281e" },
    }),
    pxToVw(),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    })
  ),
  devServer: overrideDevServer(devServerConfig()),
};
