"use strict"

const express = require('express')
const pc = require('picocolors')
const app = express()

app.get('/views/presupuestos', (_, res) => {
  res.send('Hello World!')
})

const PORT = 1234
const LOCALHOST = `http://localhost:${PORT}`

app.listen(PORT, () => console.log(pc.blackBright(`Listening port`), pc.cyan(LOCALHOST)))
