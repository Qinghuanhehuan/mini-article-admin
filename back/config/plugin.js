'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// {app_root}/config/plugin.js
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.routerGroup = {
  enable: true,
  package: 'egg-router-group',
};
