const fs=require('fs');
fs.writeFileSync("data.txt","Data is written by nodejs")
//console.log("Data written successfully")

//const rd=fs.readFileSync("data.txt")
console.log("before reading")
const rd1=fs.readFileSync("data.txt",{encoding:'utf-8'})
console.log(rd1.toString());
console.log("After reading")
console.log("before append")
fs.appendFileSync("data.txt","appended data by fs moodule");
console.log("after append")
console.log(rd1)
//console.log(rd)