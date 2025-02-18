//loops in javascript

console.log("for loop");

for(let i=0; i<5; i++){
    console.log(i);
}

console.log("While loop");

// let j=1;
// while(j<11){
//     console.log(j);
//     j++;
// }

console.log("do while loop");
let j=1;
do{
    console.log(j +"." + "aman");
    j++;
}while(j<=10);


console.log("For of loop");

let colors=["red","green","blue","yellow"];
for(let color of colors){
    console.log(color);
}


console.log("For in loop");

let person={"aman":1,"ashu":2,"kumar":3};

for(let key in person){
    console.log(key);
}