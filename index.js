const express = require("express");
const app = express(); //server side ki web appplicate we made using this app  --- app is object
// express is a fnc
console.log("Script executed"); // Add this line to confirm execution
console.dir(app);
let port = 8000; // 8080 for making custom server
//making our 1st server ... stat our server on client


// app.get("/", (req, res) => {
//     res.send("Hello, World!"); // This will respond with "Hello, World!" when accessing the root URL
// });

app.listen(port, () => {   // call back
    
    console.log(`app is listeining on port ${port}`);
});



// .............................hoppscotch........................

// app.use((req,res)=>{   // for all get & post use app.get instead
   
    //express create 2 call back by default req & res
                              // .......................... sending a respond ...............
    // console.log(req);

                                       // ------basic response-----
    // console.log("request recieved") ;
    // res.send("this is a basic response")
                                       // --------object send------
    // res.send({
    //     name:"apple",
    //     color:"red"
    // });

                                        //   ----html send----
    // res.send(
    //    " <h1>fruits</h1> <ul><li>apple</li> <li>banana</li></ul> "
    // )
// });



// -------------------app.get-------------------
app.get("/", (req,res)=>{
    res.send(" hello i am root");
});
// app.get("/search",(req,res)=>{
//     res.send("at search path")
// });
// app.post("/" , (req,res)=>{
//     res.send("you sent a post request to root")
// });

                     // ----------path parameter------------------
app.get("/:uusername/:id" , (req,res)=>{
    console.log(req.params);
    res.send("username is variable");
});
// ---------------------------query string-----------------

// app.get("/search" , (req,res)=>{
//     console.log(req.query);
//     res.send("no result");

// });
app.get("/search" , (req,res)=>{
         let {q} =req.query;
        res.send(`search result is ${q}`);
    
    });
