let http = require("http");
let fs = require('fs');
let server = http.createServer((req,res)=>{
    fs.mkdir('abhi/ram',(err)=>{
        if(err){
            fs.mkdir('abhi',(err1)=>{
                if(err1){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }
                else{
                    res.write("abhi directory created succesfully !!!!!!!!");
                    res.end();
                }
            })
            fs.mkdir('abhi/ram',(err1)=>{
                if(err1){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }
                else{
                    res.write("ram directory created succesfully !!!!!!!!");
                    res.end();
                }
            })
            
        }
        else{
            res.write("abhi\ram directory created successfully !!!!!!!!");
            res.end();
        }
    });
});
let port = 3000;
server.listen(port,()=>{
    console.log("server running ")
})