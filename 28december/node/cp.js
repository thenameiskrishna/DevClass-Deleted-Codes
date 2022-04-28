// child process is a node module which is used to creater sub process within a script


const cp= require('child_process')
// console.log("calculator Opend")
// cp.execSync("calc")

// console.log("Calculator Opend")
 
// console.log("Trying to open Vs Code")

// cp.execSync('code')
console.log("Trying to open chrome")
cp.execSync(" start chrome https://www.primevideo.com/storefront/home/ref=atv_nb_sf_hm")

