const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(99,120,149)",
              "@font-size-bae": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
