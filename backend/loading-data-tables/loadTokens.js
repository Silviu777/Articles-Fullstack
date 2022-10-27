var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/tokens',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Token_body": "Token 1"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
});

var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/tokens',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Token_body": "Token 2"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/tokens',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Token_body": "Token 3"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/tokens',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Token_body": "Token 4"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/tokens',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Token_body": "Token 5"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/tokens',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Token_body": "Token 6"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });