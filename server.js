const express = require('express');
const http = require('http');
const path = require('path');
const api = require('./server/routes/api')
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname + '/dist')));
// Start the app by listening on the default
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const port = process.env.PORT||'8000';
app.set('port',port);
// Heroku port
const server = http.createServer(app)
server.listen(port, () => console.log('Running'));