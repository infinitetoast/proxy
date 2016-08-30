var app     = require('express')();
var proxy   = require('express-http-proxy');
var url     = require('url');

app.use('/', proxy(process.env.AUTH_URL, {
  forwardPath: function(req, res) {
    return '/connect/google';
  }
}));

app.listen(process.env.PORT || 4532);