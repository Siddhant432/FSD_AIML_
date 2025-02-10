const fs=require('fs')
function myWriteFile(){
try{
console.log("before wriring")
fs.writeFileSync("data.txt","data is written by node js")
console.log("data written successfully");
}catch(err){
    console.log("error in wriring data"+err);
}
}
function myReadFile(){
try{
console.log("before reading")
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd.toString());
console.log("after reading")
}catch(err){
    console.log("error in wriring data"+err)

}
}

function MyAppendFile(){
try{
console.log("before append");
fs.appendFileSync("data.txt","appended data");
console.log("after append")
}catch(err){
    console.log("error in wriring data"+err)
}}

function MyDeletedFile(){
try{
fs.unlinkSync("data.txt");
console.log("file deleted")
}catch(err){
    console.log("error in wriring data"+err);
}}

const obj={
    write:myWriteFile,
    read:myReadFile,
    append:MyAppendFile,
    delete:MyDeletedFile,
};

module.exports=obj;