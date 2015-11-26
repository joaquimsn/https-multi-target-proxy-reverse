"use strict";

var should  = require('should'),
    domain = require('./../lib/domain');
    domain = domain();
    console.log("Conteudo do domain" + domain);

describe('Testing domains files', function () {
  it('Domains should be have "domain" property', function () {
    console.log(domain.routes);
    domain.should.have.property('domain');
  });

  it('Domains should be have "routes" property and length greater then 1', function () {
    domain.should.have.property('routes');
    var length = domain.routes.length;
    length.should.be.above(1);
  });

  it("Property route should be have 'origin' and have type String", function() {
    domain.routes.forEach(function (route) {
      route.should.have.property('origin');
      route.origin.should.be.String;
    });
  });

  it("Property route should be have 'target', have type String and start with 'http://'", function() {
    domain.routes.forEach(function (route) {
      route.should.have.property('target');
      route.target.should.be.String;
      route.target.should.startWith('http://');
    });
  });

  it("Property route should be have 'port', have type Number and value between 0 and 65536", function() {
    domain.routes.forEach(function (route) {
      route.should.have.property('port');
      route.port.should.be.a.Number;
      route.port.should.within(0, 65536);
    });
  });
});