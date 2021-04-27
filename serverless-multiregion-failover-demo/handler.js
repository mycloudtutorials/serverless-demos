'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from the function in region: ' + context.invokedFunctionArn.split(':')[3]
      },
      null,
      2
    ),
  };

};

/**
 * We are returning a String "OK" in the response. We will setup the Route53 health check to look for 
 * this string.
 * In production / practical setup, we will be checking the status of some critical services to determine the 
 * application's health
 * 
 */

module.exports.health = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Healthy instance! OK from region:' + context.invokedFunctionArn.split(':')[3],

      },
      null,
      2
    ),
  };
};
