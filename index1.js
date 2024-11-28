let http = require("http");
let fs = require('fs');
let server = http.createServer((req,res)=>{
    fs.mkdir('allu/arjun',{recursive:true},(err)=>{
        if(err){
            res.write(JSON.stringify(err.message));  
            res.end();
        }
        else{
            res.write("allu/arjun directory created successfully !!!!!!!!");
            res.end();
        }
    });
});
let port = 3001;
server.listen(port,()=>{
    console.log("server running ")
})