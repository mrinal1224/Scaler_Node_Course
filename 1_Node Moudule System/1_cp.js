//child process is a node module used to create sub proccess within a script
// you can  perfrom diffrent tasks with your script by just using some methods


const cp = require('child_process')



// cp.execSync('calc')

// cp.execSync('start chrome https://www.scaler.com/topics/ ')


console.log('output '+ cp.execSync('node demo.js'))




