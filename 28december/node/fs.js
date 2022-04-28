// ***fs module*** File system module is generally uses for acess ,files or directeries(folder) 
// delete ya kuch bhi krna ho hum fs module ki helpnse kr skte hain))
const fs= require('fs')
// const { fileURLToPath } = require('url')
// // 1.  we will read, Write, Delete,Update files

// // Reading a File( fs.readfileSync)

// let content=fs.readFileSync('f1.txt')
// console.log("This is F1 Data->" +content)

// // Write file module ( fs.writeFileSync )
// // writing at the file (if the file name does not exist then a new file
// // and the data will be written on that file will be created with its name)

// fs.writeFileSync("f2.txt",'This Data will Be Writen on F2')  
// console.log("Data written")

// // append file (Update File)
// // apend module 
// // appendFileSync() adds new data to prevously written file
// fs.appendFileSync('f2.txt','My name is krishna singh chauhan') 

// //delete module(used for delete file)
// fs.unlinkSync('f1.txt')
// console.log('f1 deleted')

// <<<---Directories--->>>//<<<---folders--->>>///

// fs.mkdirSync("My Name")
// console.log('Directory Created')
//This Module( mkdirSync--->> makeDirectoriesSync ) Create A file

// <<<-- For Delate a Directories -->>>// ( **rmdirSync()** This module will Delete Your File)
// fs.rmdirSync("My Name")
// console.log("Directories Removed")

//<<<----Let check the directories exist or not--->>// 
// this will check the  Does file exist or not (true or False)

let doesExist= fs.existsSync('f2.txt')
console.log(doesExist)