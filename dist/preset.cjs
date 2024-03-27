'use strict';

// src/preset.ts
var viteFinal = async (config) => {
  console.log("This addon is augmenting the Vite config");
  return config;
};
var webpack = async (config) => {
  console.log("This addon is augmenting the Webpack config");
  return config;
};

exports.viteFinal = viteFinal;
exports.webpack = webpack;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preset.cjs.map