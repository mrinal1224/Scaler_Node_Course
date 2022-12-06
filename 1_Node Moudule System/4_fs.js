// files

const fs = require('fs')



//reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1->  ' + fileContent)

// // writing in a file

// // // if the file name that is passed doesnt not exists  a new file will be created with its
// // //name and the data will be written on that file


// fs.writeFileSync('f2.txt' , 'This is file 2')

// console.log('File has been written')

// //append a file

// // // appnedFileSync method adds new data to a previosuly written file


// fs.appendFileSync('f3.txt' , ' This is updated data')

// console.log('File has been appended')


// // // deleting a file

// fs.unlinkSync('f2.txt')

// console.log('file has been Deleted')




// Directories

// create a directory

// fs.mkdirSync('myDirectory')


// check the content inside of a directory

// let folderPath = 'D:\\The Ultimate Node Course\\1_Node Moudule System\\myDirectory'


// let folderContent = fs.readdirSync(folderPath)

// console.log("Folder Content ", folderContent)



// check wheter a directory exists or not

let doesExist = fs.existsSync('1_cp.js')

console.log(doesExist)


// remove directory

fs.rmdirSync('myDirectory')

console.log('dir has been Deleted')