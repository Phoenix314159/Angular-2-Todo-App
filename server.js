const express = require('express'),
  app = express(),
  port = process.env.PORT || '3005',
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

