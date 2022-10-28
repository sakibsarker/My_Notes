const http=require("http")
const fs=require("fs")
const PORT=3000
const hostName="127.0.0.1"

const server=http.createServer((req,res)=>{

    const hendleRead=(statusCode,filelocation)=>{
        fs.readFile(filelocation,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"})
            res.write(data)
            res.end()

    })
}

    if(req.url=="/"){
        hendleRead(200,"index.html")
    
    }
    if(req.url=="/about"){
        hendleRead(200,"about.html")
       
    }
    if(req.url=="/contract"){
        hendleRead(200,"contract.html")
       
    }
    else{
        hendleRead(404,"404.html")
    }
})

server.listen(PORT,hostName,()=>{
    console.log(`server is runnint http://${hostName}:${PORT}`)
})
