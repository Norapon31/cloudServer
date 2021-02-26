const fs = require('fs')
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')
const express = require('express')
const https = require('https')
const logger = require('morgan')
const cors = require('cors');
const helmet = require('helmet')
const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(helmet())
const server = https.createServer({key: key, cert: cert }, app)

app.get('/', (req, res) => { res.send('SQL poompuang test....') })

server.listen(PORT,'116.204.182.208', () => { console.log('listening on ......') })