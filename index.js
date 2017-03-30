var request = require('request');

console.log("hi>>>");
request({
  method: 'GET',
  uri: 'https://api.fullcontact.com/v2/company/search.json',
  qs: {companyName: 'eatsa'},
  headers: {
    'X-FullContact-APIKey': '957f1beac769ac2c'
  },
}, 
function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log("response is>>>", info);
  }
});
