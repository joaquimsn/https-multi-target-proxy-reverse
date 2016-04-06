module.exports = function () {
  "use strict";
  return {
    domain: 'example',
    routes: [
      {
        origin: 'coletivoeducacao.com.br',
        target: 'localhost',
        port: 3100
      },
      {
        origin: 'localhost',
        target: 'http://aws.amazon.com',
        port: 80
      }
    ]
  };
};
