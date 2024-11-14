const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("executed promise")
        resolve("success");
    }
);
mypromise.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log("Error is",err)
}).finally(()=>{
    console.log("Executed finally block")
})