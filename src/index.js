import './env'
import authRouter from './samlAuth/index'
import express from 'express'
import consola from 'consola'
import http from 'http'
import bodyParser from 'body-parser'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8081

app.set('port', port)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function start() {
  app.use('/auth', authRouter)

  http.createServer(app).listen(port)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
