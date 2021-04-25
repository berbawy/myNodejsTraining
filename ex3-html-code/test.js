const request = require('request');
const fs = require('fs');

const fileToRead = 'link.txt';

fs.readFile(fileToRead, 'utf8', function(err, url) {  
    if (err) throw err;
    
    request(url, function (error, response, body) {
        const titleWebPage = body.match(/<title>(.*)<\/title>/i)[1];
        console.log("URL: " + url)
      console.log("TITLE: " + titleWebPage)
    });
});

