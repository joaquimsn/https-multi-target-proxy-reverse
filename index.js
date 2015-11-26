  "use strict";

var http          = require('http'),
    https         = require('https'),
    httpProxy     = require('http-proxy'),
    core          = require('./lib/core'),
    errorHandler  = require('./error-handler/errorHandler'),
    config        = require('./config'),
    proxy         = httpProxy.createProxyServer(),
    fs            = require('fs');


var httpsOptions = {
  key: fs.readFileSync(config.key, 'utf8'),
  cert: fs.readFileSync(config.cert, 'utf8')
};

var serverHttps        = https.createServer(httpsOptions, function(req, res) {
  var host        = req.headers.host,
      parsedHost  = core.parseHost(host),
      origin      = parsedHost.origin,
      target      = core.findTarget(origin);

  proxy.web(req, res, {target: target});

  proxy.on('error', function (err, req, res) {
    console.log(err);
    errorHandler.send(err, res);
  });
});

console.log("Listening serverHttps on port " + config.serverHttpsPort);
serverHttps.listen(config.serverHttpsPort);

var serverHttp = http.createServer(function(req, res) {
  var host =  req.headers.host;
  console.log(req.headers);
  console.log('host ' + host);
  res.writeHead(302, {'Location': 'https://' + host.replace(':3080', ':3443')+ req.url});
  res.end();
});

console.log("Listening serverHttp on port " + config.serverHttpPort);
serverHttp.listen(config.serverHttpPort);