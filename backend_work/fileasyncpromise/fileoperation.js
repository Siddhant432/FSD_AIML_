const fs=require('fs').promises;
const promise=fs.writeFile('data.txt',"Hello,writing data through fs promise module",{encoding:'utf-8'})
const p1=fs.readFile("data.txt",{encoding:'utf-8'})
//console.log(promise)
promise.then(()=>{
    console.log("data written successfully")
}).catch(err=>{
    console.log("error is" + err)
}).finally(msg=>{console.log("finally done")})

p1.then(()=>{
    console.log("data read")
}).catch(err=>{
    console.log("error is" +err)
}).finally(msg=>{console.log("done")})
