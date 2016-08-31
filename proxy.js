var app     = require('express')();
var proxy   = require('express-http-proxy');
var url     = require('url');

var port = process.env.PORT || 4532;

app.use('/', proxy(process.env.AUTH_URL, {
  forwardPath: function(req, res) {
    return '/connect/google';
  }
}));

app.listen(port, function() {
  console.log(`Proxy running on port ${port}`);
});
