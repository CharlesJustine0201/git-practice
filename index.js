console.log("cjay");

var test = 123;
let test2 = 4456;
const test3 = 789;

 test = 619;
 test2 = 765;


console.log("test", test);
console.log("test2", test2);
console.log("test3", test3);

//Primitive Value
console.log(123);
console.log("123");
console.log(true);
console.log([1, 2, 3, 4, "and"]);

// objects
console.log({
 name: "cjay",
 age: 28, 
});

// Function
function testFunction(){
    console.log("testFunction");
}

testFunction()

const testFunction2 = function(){
    console.log("testFunction2");
}
testFunction2();

const testFunction3 = () => {
    console.log("test function");
}
testFunction3();

//oop
const dat = {
    name: "cjay", 
    hello: function () {
        console.log("hello",this.name);
    },
};
 dat.hello();

 //arrays
 const fruits = [ "apple", "mango", "avocado"];
 console.log(fruits[2]);

 //objects
 const person = {
    name: "cjay miranda",
    age: 23,
    address:{
        brgy: "Pulo Cabuyao", 
        city: "Laguna",
    },
    number: ["1st", "2nd", "3rd"],
 };
 console.log(person.name);
 console.log(person.age);
 console.log(person.address.brgy);
 console.log(person.address.city);
 console.log(person.number[0]);
  console.log(person.number[1]);
   console.log(person.number[2]);

   // condition
   const age =  27;
   if (age == 27){
    console.log("valid");
   }else{
     console.log("invalid");
   };

   switch (age){

    case 28:
    console.log("Approved");
    break;
    default:
    console.log("Denied");
   };

   // loop
   for (let i = 0; i < 10; i++ ){
    console.log(`number ${i}`);
   }

   const animals = ["Dog", "Cat", "Mouse"];

   for ( let animal in animals ){
    
    console.log(`animal: ${animals[animal]}`);
   };
   for (let animal of animals)
    console.log(animal);

 //fetch call an API
 fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
