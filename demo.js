const prompt=require("prompt-sync")();

var marks=prompt("enter the mark")
let mark=parseInt(marks)
if(mark==100 & mark>80){
    console.log("A Grade")
}
else if(mark<=80 & mark>=50){
    console.log("B Grade")
}
else if (mark<50 & mark>=0){
    console.log("fail")
}
else{
    console.log("invalid mark")
}
console.log(mark);