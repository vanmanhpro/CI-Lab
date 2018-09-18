const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

var server = app.listen(2200, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s%s',host,port);
});