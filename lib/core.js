  "use strict";

function _getRouteByOrigin(routes, origin) {
  return routes.filter(
    function (routes) {
      return routes.origin === origin;
    }
  );
}

function _removeTlds(host) {
  var config = require('./../config');
  config.tlds.forEach(function (tld) {
    host = host.replace(tld, '');
  });
  host =  host.replace(config.thirdLevelDomain, '');
  return host;
}

module.exports = {
  parseHost: function (host) {
    var globalHost = _removeTlds(host),
        hostArray = globalHost.split('.'),
        domain,
        origin;

    if (hostArray.length > 2) {
      origin = hostArray[0];
      domain = hostArray[1];
    } else {
      domain = hostArray[0];
      origin = domain;
    }
    return {
      domain: domain,
      origin: origin
    };
  },
  findTarget: function (origin) {
    var dnsObject = require('./../lib/domain'),
        routes = dnsObject().routes,
        route = _getRouteByOrigin(routes, origin);
    return route[0].target + ':' + route[0].port;
  }
};