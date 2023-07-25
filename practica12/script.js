
const num1=Math.floor((Math.random()*99)+1)
const num2=Math.floor((Math.random()*99)+1)
const num3=Math.floor((Math.random()*99)+1)

if(num1 === num2){
    num2=Math.floor((Math.random()*99)+1)
}else if (num1===num3){
    num1=Math.floor((Math.random()*99)+1)

}else if(num2 === num3){
    num3=Math.floor((Math.random()*99)+1)    
}
console.log(num1,num2,num3)