var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
app.use(bodyParser());
app.use(express.static('public'));


app.post('/api/fullcontact', function (req, res) {
  var companyName = req.body.companyName;
  console.log("hi>>>");
  console.log("request body is >>>", req.body);
  console.log("companyName is >>>", companyName);
  request({
    method: 'GET',
    uri: 'https://api.fullcontact.com/v2/company/search.json',
    qs: {companyName: companyName},
    headers: {
      'X-FullContact-APIKey': '957f1beac769ac2c'
    },
  }, 
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log("response is>>>", info);
      res.json(info);
    }
  });
  
});

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.get('/*', function(req, res){
  res.redirect('/');
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
