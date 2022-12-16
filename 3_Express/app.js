const express = require('express')

const morgan = require('morgan')



const myMiddlewareFunction = require('./middlewares/middle')
const myMiddlewareFunction2 = require('./middlewares/middle_2')

const app = express()

// get , post , put , delete


app.use(express.json())


app.use(myMiddlewareFunction)

app.use(myMiddlewareFunction2)

app.use(morgan('tiny'))



let courses = [
    {id:1 , name :'JavaScript'},
    {id:2 , name :'Java'},
    {id:3, name :'Python'},
]

app.get('/' , (req , res)=>{
    res.send('Hello from Scaler Topics')
}) // Read

app.get('/about', (req , res)=>{
    res.send('We Create Impact')
})


app.get('/contact', (req , res)=>{
    res.send('Contact us a abcd@abcd.com')
})

app.get('/courses' , (req , res)=>{
    res.send(courses)
})

app.post('/courses' , (req , res)=>{
    const course ={
        id : courses.length +1,
        name :  req.body.name
    }
      courses.push(course)
      res.send(course)

}) // Create


// put method

app.put('/courses/:coursename' , (req , res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course you are looking for does not exist')


    course.name = req.body.name
    res.send(course)
}) // Update Data



// Route Parameters

app.get('/courses/:coursename' , (req , res)=>{
    //console.log(req.params.coursename)
    let course = courses.find(course => course.name === req.params.coursename)
    

    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course)
})



// app.delete('/courses/:coursename' , (req , res)=>{
//     let UpdatedCourses = courses.filter(course => course.name !== req.params.coursename)

//     courses = UpdatedCourses

//     res.send(courses)
// })




app.delete('/courses/:id' , (req , res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    console.log(course)
    if(!course) res.status(404).send('The course you are looking for does not exist')

    const index = courses.indexOf(course)

    courses.splice(index , 1)

    res.send(course)
    
})




const port = process.env.PORT || 3000






app.listen(port , ()=> console.log(`Port is running on ${port}`))
