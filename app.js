require('dotenv').config()
const express = require('express')
const app = express()


// app.use((req, res) => {
//     console.log("We got a request");
//     res.send("<h1>We Got Your Request !!! Here is your Response!!!</h1>")
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello Everyone ! This is the HOMEPAGE!</h1>')
  })




app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
  })
app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit , postId} = req.params;
    res.send(`<h1>viewing the PostId:${postId} on the ${subreddit} subreddit</h1>`)
  })


  

  app.get('/cats' , (req,res) => {
    res.send("<h1> Meow </h1>")
  })
  app.get('/dogs' , (req,res) => {
    res.send("<h1> Woof </h1>")
  })


  app.get('/search' , (req,res) => {
    const {q} = req.query
    if(!q){
        res.send('Nothing Searched Nothing Found!!!')
    }
    res.send(`Search result for ${q}`)
  })

  app.get(/(.*)/ , (req,res) => {
    res.send("<h1> I dont Know </h1>")
  })
  
app.listen(3000 , () => {
    console.log("Listenning on port 3000");
    
})