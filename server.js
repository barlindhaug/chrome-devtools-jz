var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var numbers = ['10', '2', '0', '2'];
  var numbersParsed = numbers.map(parseInt);
  var sum = numbersParsed.reduce((a,b) => a + b);
  res.send('Sum of the numbers: ' + sum);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

console.log('hi');