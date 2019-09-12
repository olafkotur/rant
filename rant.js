const request = require('request');

const url = 'https://devrant.com/api/devrant/rants/surprise?app=3';
request(url, function (error, response, data) {
  if (!error && response.statusCode == 200) {
    parsedData = JSON.parse(data);
    const rant = parsedData.rant.text;
    console.log('\x1b[32m', rant);
  }
});