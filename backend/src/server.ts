import express, { application } from 'express'


const app = express()

app.get('/ads', (require, response) => {
  response.send('eae')
})

app.listen(3777)