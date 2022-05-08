import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import {MongoClient} from "mongodb"

const url = "mongodb://localhost:27017"
const port = 8000
const app = express()
const client=new MongoClient(url)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",async (_req,res)=>{
    await client.connect()
    res.send("huj0")
    await client.close()

})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})