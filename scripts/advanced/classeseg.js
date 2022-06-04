/*class UserClass{
    constructor(fname,regno,cgpa){
        this.fname=fname
        this.regno=regno
    }
    getDetails(){
        console.log(`student name is : ${this.fname} , reg no :${this.regno}`)
    }
}
/*let obj1=new StudentClass("peter",22323)
let obj2=new StudentClass("henry",22324)

class CourseList extends UserClass{
    constructor(fname,regno,cname,attendance){
        super(fname,regno)
        this.cname=cname
        this.attendance=attendance
    }
    getCourseDetails(){
        console.log(`student name :${this.fname},course name :${this.cname},attendance :${this.attendance}`)
    }

}
let obj1=new CourseList("john",123,"MERN","90%")
obj1.getCourseDetails()

class StudentClass{
    constructor(fname,regno,cgpa){
        this.fname=fname
        this.regno=regno
    }
    static dummy="sample"
    static greet(){
        console.log("hello user")
    }
    getDetails(){
        console.log(`student name is : ${this.fname} , reg no :${this.regno}`)
    }
}
let obj1=new StudentClass("peter",22323)
let obj2=new StudentClass("henry",22324)

StudentClass.greet()*/


//object constructors

function StudentFunction(fname,regno){
this.fname=fname
this.regno=regno
/*this.getDetails=function(){
    console.log(`${fname}`)
}*/
}
StudentFunction.prototype.courseName="MERN"
StudentFunction.prototype.getDetails=function(){
    console.log(`${this.fname}`)
}
const obj1=new StudentFunction("peter",122)
const obj2=new StudentFunction("henry",122)
const obj3=new StudentFunction("pete",122)
/*console.log(obj1.fname,obj1.courseName)
console.log(obj2.fname,obj1.courseName)
console.log(obj3.fname,obj1.courseName)*/
obj1.getDetails()
obj2.getDetails()










