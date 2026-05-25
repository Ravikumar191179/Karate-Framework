function fn() {

  // Reads value passed from command line:
  // mvn test -Dkarate.env=qa
  var env = karate.env;  //get java system property 'karate.env'
	env = 'stage'
  karate.log('karate.env =', env);

  // default environment
  if (!env) {
    env = 'dev'; //a custom 'intelligent' default
  }

  // Common variables for all environments
  var config = {  //base config JSON  //json object
    env: env,

    appId: 'qa-automation-app',
    appSecret: 'my-secret-key',

    token: 'sampleBearerToken123',

    connectTimeout: 5000,  //Do not waste time waiting for a connection or if servers dont respond within 5000 ms.
    readTimeout: 5000,

    baseUrl: 'https://dev-api.mycompany.com',
    authUrl: 'https://dev-auth.mycompany.com',
    userEndpoint: '/users',
    orderEndpoint: '/orders'
  };

  // QA environment
  if (env == 'qa') {  //Over-ride only those that need to be

    config.baseUrl = 'https://qa-api.mycompany.com';
    config.authUrl = 'https://qa-auth.mycompany.com';

  }

  // Stage environment
  else if (env == 'stage') {

    config.baseUrl = 'https://stage-api.mycompany.com';
    config.authUrl = 'https://stage-auth.mycompany.com';

  }

  // E2E environment
  else if (env == 'e2e') {

    config.baseUrl = 'https://e2e-api.mycompany.com';
    config.authUrl = 'https://e2e-auth.mycompany.com';

  }

  // Production
  else if (env == 'prod') {

    config.baseUrl = 'https://api.mycompany.com';
    config.authUrl = 'https://auth.mycompany.com';

  }

  // Karate global settings
  karate.configure('connectTimeout', config.connectTimeout);
  karate.configure('readTimeout', config.readTimeout);

  karate.log('Base URL =', config.baseUrl);

  return config;
}