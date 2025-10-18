import express from "express"

// create an instance of express 
const app = express()
// we can make more than one express() instance 

// middleware : its like a translator : bech ta9ra data li jaya m server w tarjemha 9bal response 
app.use(express.json())

// define the port where the back is running 
const port =3000

// static array of data 
const languages = [
    {id:1,name:"Javascript"},
        {id:2,name:"JAVA"},
            {id:3,name:"C#"},
]
/*
req:kayennek bech ta3mel order l 7aja : 
=>req.params: ex : /lang/3
=>req.body: ex {id:4,name:"python"}  n7eb nzidha lel array 
=>req.headers : metadata
=>req.query : info fil url (/serach?term=test)

res : like a servers response ; ynajem ykoun :
=>res.send() : bech tgoul 7aja : Say something
=>res.json(): send structruded data (formatted)
=>res.statuts() :indication success or failure 
*/



// list of routes 
app.get('/',(req,res)=>{
    res.send("welcome to our first Express serv!! ")
})
// lets create a backend route to get all the languages 
app.get('/allLang',(req,res)=>{
res.json(languages)

})

app.get('/language/:id',(req,res)=>{
    // extract the id from the req 
    const {id}=req.params
    const oneLanguage =languages.find(lan=>lan.id ==id)
    //if found
    if(oneLanguage){
        res.status(200).json(oneLanguage)
    } else {
        res.status(404).send("stop using the url !!")
    }
})

app.post('/addLanguage',(req,res)=>{
    // i will add a new language to the array
    const newLanguage=req.body 
    languages.push(newLanguage)

    res.status(200).json(languages)
})




// app listen to port => to make sure our server is running 

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})