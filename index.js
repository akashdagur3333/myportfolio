require('dotenv').config()
const express=require('express')
const db=require('./db')
const bodyParser=require('body-parser')
var app=express()
const cors=require('cors')
app.use(bodyParser.json())
const messageRoute=require('./Routes/MessageRoute')
const adminRoute=require('./Routes/AdminRoute')
const ori=process.env.ORIGIN || 'https://akashchaudhary-6be0a.web.app'

app.use(cors({origin:'https://akashchaudhary-6be0a.web.app'}))


const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Start on ${PORT}`)
})

app.use('/',messageRoute)
app.use('/',adminRoute)
