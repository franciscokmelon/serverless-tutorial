"use strict";

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
      input: event
    })
  };
  console.log("Event:", event, "Context", context);

  callback(null, response);
};
