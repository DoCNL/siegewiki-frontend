// const express = require('express');
// const app = express();

// app.listen(process.env.PORT || 3000, () => {
//     console.log('App is ready for requests.')
//   })
//   .on('error', (error) => {
//     console.warn('Warning', error.toString());
// });

// module.exports = app;

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/siegewiki-frontend')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/siegewiki-frontend/index.html'));
});

const port = process.env.PORT || '9000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running`));