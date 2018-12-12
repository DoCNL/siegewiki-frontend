const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log('App is ready for requests.')
  })
  .on('error', (error) => {
    console.warn('Warning', error.toString());
});

module.exports = app;