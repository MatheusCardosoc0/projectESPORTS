import  express  from "express";

const app = express()

app.get('/games/:id/ads',(req, res) => {

  const gamesId = req.params


  return res.json([
    {nome: 'bobo'},
    {nome: 'jaqueline'},
    {nome: 'dedei'},
    {nome: 'marr'}
  ])
})

app.get('/ads/:id/discord',(req, res) => {

  const adId = req.params


  return res.json([
    
  ])
})

app.listen(3777)