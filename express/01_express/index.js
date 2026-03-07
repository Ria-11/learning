const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.end('Hello from Express');

});
app.get('/contact-us', function (req, res) {
    res.end('Contact us at email.com');
});

app.post('/tweet', function (req, res) {
    res.status(201).end('Tweet posted successfully');
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});

app.get('/tweet', function (req, res) {
    res.end('Tweet1\nTweet2\nTweet3');
});
