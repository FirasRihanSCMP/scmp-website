/* require('ignore-styles')
require("regenerator-runtime/runtime");
require("@babel/core").transformSync("code", {
    plugins: ["@babel/plugin-transform-async-to-generator"],
  });
require('@babel/register')({
    ignore:[/(node_module)/],
    presets:['@babel/preset-env', '@babel/preset-react']
})


require('./express')
 */