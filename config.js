module.exports = {
  'serverHttpPort': 3080,
  'serverHttpsPort': 3443,
  'thirdLevelDomain': 'www.',
  'tlds': ['.br'],
  'sources': {
    'test': './test/*Spec.js'
  },
  'cert': './certificate/cert.pem',
  'key' : './certificate/private-key.pem'
};