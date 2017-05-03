'use strict';
// requiring express in local versions
const express = require('express');
// local port
const PORT = process.env.PORT || 3000;
// assigning npm express to the var app
const app = express();
// giving defualt pathway for the server to find corresponding files
app.use(express.static('./public'));
// if any url is entered it will defualt to index.html
app.get('/*', (request, response) => response.sendFile('index.html', {root: '.'}));
// creating listener for this specific port
app.listen(PORT, function(){
  console.log(`being hosted on ${PORT}`);
});
