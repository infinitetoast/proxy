var app     = require('express')();
var proxy   = require('express-http-proxy');
var url     = require('url');

var port = process.env.PORT || 4532;

app.use('/api/v1/auth', proxy(process.env.AUTH_URL, {
  forwardPath: function(req, res) {
    return '/connect/google';
  }
}));

app.listen(port, function() {
  console.log(`Proxy running on port ${port}`);
});

// successful return from auth
app.use('/api/v1/success', function(req, res) {
  // send to task service
  res.send('SUCCESS!');
});

app.use('/login', function(req, res) {
  // you failed
  res.send('LOGIN FAILED!');
});
