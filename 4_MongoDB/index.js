const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connection is Successful'))
.catch(err=> console.error('Coudlnt connect to mongodb' , err))


//Schema


const courseSchema = new mongoose.Schema({
    name : {type:String , required:true , minlength : 5 , maxlength : 200},

    tags : {type : Array , validate : {
        validator : function(tags){
             return tags.length > 1
        }
    }},

    category:{
           type:String,
           required :true,
           enum :  ['DSA' , 'Web' , "Mobile" , 'Data Science']
    },
    creator : {type:String , required:true},
    publishedDate : {type:Date , default:Date.now},
    isPublished :{type:String , required:true},
    rating : {type :Number , required : function(){return this.isPublished}}
})



const Course = mongoose.model('Course' , courseSchema)


async function createCourse(){
    const course = new Course({
        name : 'MongoDB',
        tags : ['express'],
        category : 'Web',
        creator :"Adam",
        isPublished : true,
        rating:4.5
        
    });

    try {

        const result = await course.save()
        console.log(result)
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
    }
    
    
    

}// Create


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

} // Reading


// getCourses()




async function updateCourse(id){
     
    let course = await Course.findById(id)

    if(!course) return;


    course.name = 'Python'

    course.creator = 'Steve'

    const updatedCourse = await course.save()

    console.log(updatedCourse)



} // Updating

// updateCourse('639cfc3e1aabe8263ff38d4a')


// Deleting

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)

    console.log(course)

    
}


// deleteCourse('639cfc949d59875fcd30419a')

createCourse()




