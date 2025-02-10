const http=require('http')
const PORT=2500
const server=http.createServer((req,res)=>{
    res.write("Welcome to node server")
    res.end(" req has been ended")
})
server.listen(PORT,()=>{
    console.log("server running on "+PORT)
})