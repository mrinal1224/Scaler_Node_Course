const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connection is Successful'))
.catch(err=> console.error('Coudlnt connect to mongodb' , err))


//Schema


const courseSchema = new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : {type:Date , default:Date.now},
    isPublished : Boolean,
    rating : Number
})



const Course = mongoose.model('Course' , courseSchema)


async function createCourse(){
    const course = new Course({
        name : 'Ruby',
        creator :'Adam',
        isPublished : true,
        rating : 3
    });
    
    
    const result = await course.save()
    console.log(result)
}


// Ratings  0 to 5


// createCourse()

/// Comparision operators
// eq (equal)
// gt(greater than)
// gte ( greater than and equal to)
// lt
// lte

// in
// not in


// Logical Operator 
//or
//and

async function getCourses(){

 const courses = await Course.find({rating : {$in : [3 , 4.2 , 4.5 , 4.3]}}).select({name :1 , publishedDate:1})
 .or([{creator:'Mrinal'} , {rating:2}] ,)

 console.log(courses)

}


getCourses()



