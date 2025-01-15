const express = require("express");
const app = express();
const port = 8080;


app.use(express.urlencoded({extended:true})); // for all type of request-- get , post , url ..etc express.urlendoce-- middleware
app.use(express.json()); // for json data 


//get method
// data send to json format on hopscotch
app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`sending GET response . Welcome ${user}` )
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,password} = req.body;
    res.send(`sending Post response . Welcome ${user}` )
   
});

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});