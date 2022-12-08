const { urlencoded } = require('body-parser')
const express = require ('express')
var bodyParser = require('body-parser')


const app = express() //our app or instance of express
const port = process.env.PORT || 3000 //port #


app.use(express.static('public')) //serve public folder as a static folder
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


//API Middlewares 
app.use(express.json()) //accepts data in json
app.use(express.urlencoded()) //to decode data sent through html form

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//API Routes
app.get('', (req, res,)=> {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/feedback', (req, res)=> {
    res.sendFile(__dirname + '/views/feedback.html')
})

app.post('/feedback',urlencodedParser, (req, res)=> {
    console.log(req.body)
})


//listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))