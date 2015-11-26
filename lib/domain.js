module.exports = function () {
  "use strict";
  return {
    domain: 'example',
    routes: [
      {
        origin: 'example',
        target: 'http://google.com',
        port: 80
      },
      {
        origin: 'aws',
        target: 'http://aws.amazon.com',
        port: 80
      }
    ]
  };
};