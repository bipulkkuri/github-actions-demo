const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
     const msg = 'Hello, World!'
    res.end(msg);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//for testing purpose
  module.exports = app;
