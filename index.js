const express = require('express')
const crypto = require('crypto')

const app = express()
const SECRET = crypto.randomBytes(32).toString('hex')
const PORT = 8008
const IP = 'Change with your ISP IP (Step one in README.md)'

app.use(`/${SECRET}`, express.static('files'))

// Just for testing server is running
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)

console.log(`
  Link to file you want ot share will be:
  http://${IP}:${PORT}/${SECRET}/full-name-of-file-you-want-to-share-including.extension\n
  Make sure file is in ./files folder
`)
