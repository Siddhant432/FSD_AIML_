//console.log("hello nodejs")
function sum(num1,num2){
    return num1+num2;
}
//const re=sum(23,10);
//console.log(re)

const mul=(n1,n2)=>{
    return n1*n2
}
//module.exports=sum
module.exports={
    s:sum,
    m:mul
}