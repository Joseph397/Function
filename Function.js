//Function ex:1

// function greet(sirname) {
//   console.log("Welcome to our website " + sirname);
// }

// console.log("rest of code");

// function signUp() {
//   let name = prompt("what is your name");
//   greet(name);
// }
// //
// //
// //
// signUp();

// ex:2 Built in functions

// let maxNr = Math.max(1, 5); // returns a value
// console.log('hey'); // some dont return a value

// console.log(maxNr);

// ex:3

function max(nr1 = 0, nr2 = 0){ // assigning peramiter to 0 sets its default value
    if(nr1 > nr2){
        return nr1;
    } else {
        return nr2;
    }
}

// let inbox = max(1,5);// 5
// let inbox = max(7,5);// 7
let inbox = max();// 0 only if peramiters are assigned value of 0, otherwise nan

console.log(inbox);