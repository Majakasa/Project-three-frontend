var express = require('express'),
    app     = express(),
    PORT    = process.env.PORT || 58164;
​
app.use(express.static('./dist'));
​
app.listen(PORT, function(err) {
  if (err) {
    console.log('error starting server', err);
  } else {
    console.log('server up and running on port', PORT);
  }
});
