// ye sab mera code hai<<<<<<>>>>>>


// function sayHi(){
//     console.log("function said Hii")
// }
// sayHi()
// function addNumbers(a,b){
//     console.log("Additon of two numbers is", a+b)
// }
// addNumbers(3,6)
// function multiplyNumbers(c,d){
//     console.log("Multiplication of two Numbers is", c*d)
// }
// multiplyNumbers(4,7)
// function divideNumbers(e,f){
//     console.log("division of Two Numbers is", e/f)
// }
// divideNumbers(100,5)

//yaha tak mera code hai<<<<<>>>>>>>

/ //Noraml function

// function sayHi(){
//        console.log('function said hi')
// } // function declaration

// sayHi() // function invokation


// //Parameters in functions

// function add(a , b){
//        console.log("The addition is" , a+b)
// }

// add(2 , 3) // 2 and 3 are arguments


// multiply

function multiply(c , d){
   return c*d
}

let product = multiply(3 ,4)
console.log(product)


// function as first class Citizens

let sayHi = function(){ // anonymous functions
       console.log('Hi') // in js you can assign a function to a vaeriable and can call it
} // function Expression


sayHi() // we are calling this later whenerver we want to


//IIFE (Immediately invoked function Expression)


let substract = (function(a,b){
       console.log(a+b)
}(20 , 10)

