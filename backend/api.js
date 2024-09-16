"use strict"

const express = require('express')
const app = express()
const pc = require('picocolors')

app.get('/views/presupuestos', (_, res) => {
  res.send('Hello World!')
})

const PORT = 1234
const LOCALHOST = `http://localhost:${PORT}`
app.listen(PORT, () => console.log(pc.blackBright(`Example app listening on port`), pc.cyan(LOCALHOST)))