var flag= true
var num=3
for(var i=2; i*i<=num;i++){
    if(num%i==0){
        flag= false
        break;
    }
}
   if(flag==true){
       console.log('Numner is Prime')

   }
   else{
       console.log('Number is not prime')
   }
//    variable declartion

// // var , let , const


// var a; // variable will be initialized with undefined
// console.log(a)

// //JS is a dynamically typed langauge dataType is npot specified here

// a = 3
// console.log(a)

// a= "I am String"
// console.log(a)

// a= true
// console.log(a)


// a = null
// console.log(a)



// DataTypes in JavaScript - number , string , boolean , undfined , null

// var b = 2.3 // as a number
// var c = 'd' // string
// var d = 'I am String' // string



// // Var has some Problems 

// // 1st Problem with var - Redeclartion
// var b = 'hello'

// console.log(b) // hello
// var b = 'bye'

// console.log(b)// bye


// // overcoming Redeclation

// // use let keyword

// let b = 'hello'

// console.log(b) // hello
// let b = 'bye' // redcalrtion is not allowed with let keyword

// console.log(b)// bye



// let b = 'hello'

// //console.log(b) // hello
// b = 2 // reassingning is allowed

// console.log(b)// bye



// // loops -

// //for loop
// //Prime Number 

// var flag = true // fail

// var num = 10

// for(var i=2 ; i*i <= num ; i++ ){
//        if(num%i==0){
//               flag = false
//               break
//        }
// }


// if(flag){
//        console.log('Number is Prime')
// }

// else{
//        console.log('Number is Not Prime')
// }


//2nd Problem with var - scoping


// if(10%2==0){
//        let a = 2
//        console.log('I am from the If block' , a)
// }

// console.log('I am from outside if block' , a)

// var z;
// console.log(z)



//Const 


const a = 2

console.log(a)

const a = 3
const a = 'I am a string' // redcalrtion is not allowed


a = 30 // reassignment is not allowed



