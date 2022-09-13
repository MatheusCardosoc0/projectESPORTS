import  express  from "express";

const app = express()

app.get('/ads',(req, res) => {
  return res.json([
    {nome: 'bobo'},
    {nome: 'jaqueline'},
    {nome: 'dedei'},
    {nome: 'marr'}
  ])
})

app.listen(3777)