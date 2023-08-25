require('dotenv').config()
const express=require('express')
const db=require('./db')
const bodyParser=require('body-parser')
var app=express()
const cors=require('cors')
app.use(bodyParser.json())
const messageRoute=require('./Routes/MessageRoute')

const ori=process.env.ORIGIN || 'http://localhost:4200'

app.use(cors({origin:ori}))


const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Start on ${PORT}`)
})

app.use('/',messageRoute)
