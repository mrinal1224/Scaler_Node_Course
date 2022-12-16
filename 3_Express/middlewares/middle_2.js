function myMiddleware2(req , res , next){
    console.log('I am the second middlware')
    next()
}

module.exports = myMiddleware2