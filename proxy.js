var app     = require('express')();
var proxy   = require('express-http-proxy');
var url     = require('url');

var PORT = process.env.PORT || 4532;

app.use('/connect/google', proxy(process.env.AUTH_URL, {
  forwardPath: function(req, res) {
    return '/connect/google';
  }
}));

// successful return from auth
app.use('/success', function(req, res) {
  // send to task service
  res.redirect(process.env.TASK_SERVER);
});

app.use('/login', function(req, res) {
  // you failed
  res.send('LOGIN FAILED!');
});

app.listen(PORT, function() {
  console.log('Proxying on PORT:', PORT);
});
