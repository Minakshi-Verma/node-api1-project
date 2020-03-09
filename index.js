const express = require("express"); // npm i express
const server = express();
const shortid = require("shortid"); // npm i shortid

let users = []

server.use(express.json()); // add this line

server.get('/',(req,res)=>{
    res.status(200).json({api: "running..."})
})

//----------------
//post request to /api/users
//1-respond with HTTP status code 400 (Bad Request).Return the following JSON response: { errorMessage: "Please provide name and bio for the user." }
 

server.post('/api/users', (req,res)=>{   
    const userInfo = req.body
    let name = "name"
    let bio = "bio"
    userInfo.id = shortid.generate()

    if(userInfo.hasOwnProperty(!userInfo.name||!userInfo.bio))
     res.status(400).json({errorMessage: "Please provide name and bio for the user." }) 
      
    if(userInfo.isValid)
     users.push(userInfo)
     res.status(201).json(userInfo)  
    .catch(err=>console.log("There was an error while saving the user to the database"),err)
    // if(userInfo.isNotValid)
    // res.status(500).json({errorMessage: "There was an error while saving the user to the database" })
   
})

server.get('/api/users', (req,res)=>{
res.status(500).json({errorMessage: "The users information could not be retrieved." })
})




const PORT = 5000;
server.listen(PORT,()=>
console.log(`\n ** API on http://localhost:${PORT} **\n`)
);