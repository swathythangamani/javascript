/*let fruits=['apple','banana','orange'];
let numbers=[14,2,43,64,85];
let mixed=['hello',42,true,null];

fruits.push('grape');
fruits.unshift('mango');
fruits.pop();
fruits.shift();

console.log(fruits[2])
console.log(numbers.slice(1,4))
console.log(mixed[1])*/


let person ={
    name:"swathy",
    age:23,
    city:"new york",
    isStudent:false
};

console.log(person.name);
console.log(person["age"]);

person.job="Developer";
person.age=31;
delete person.isStudent;
console.log(person["age"]);
