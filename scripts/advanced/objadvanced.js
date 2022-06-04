/*let user={
    fname:"peter",
    email:"peter@gmail.com",
    age:30,
    getDetails:function(){
        console.log(this)
    }
}
user.getDetails()
//hoisting
a=10
console.log(a)
var a
console.log(a)

"use strict"
function sample(){
    console.log(this)
}
sample() //undefined in use strict

sample()
function sample(){
    console.log("sample")
}

//call function
const printDetails={
    getDetails:function(country,city){
        console.log(`${this.fname} is ${this.age} old and email is ${this.email} - ${country} ${city}`)
    }
}
const user1={
    fname:"peter",
    email:"peter@gmail.com",
    age:30
}
const user2={
    fname:"henry",
    email:"henry@gmail.com",
    age:30
}
printDetails.getDetails.call(user1,"IND","Delhi")//call arguments will be direct not in an array(call method)
printDetails.getDetails.apply(user2,["IND","Delhi"])// call arguments will be sent as an array (applymethod)
const printDetails={
    getDetails:function(country,city){
        console.log(`${this.fname} is ${this.age} old and email is ${this.email} - ${country} ${city}`)
    }
}
const user1={
    fname:"peter",
    email:"peter@gmail.com",
    age:30
}
const user2={
    fname:"henry",
    email:"henry@gmail.com",
    age:30
}
const bindedfunc1=printDetails.getDetails.bind(user1)
bindedfunc1("IND","Delhi")
const bindedfunc2=printDetails.getDetails.bind(user2)
bindedfunc2("IND","TPT")*/

//closures
/*function sample(){
    let a=10
    console.log(a)
    function test1(){
        console.log(a)
        function test2(){
            console.log(a)
        }
        test2()
    }
    test1()
}
sample()
function sample(){
    let a=10
    return function test(){
        console.log(a)
    }
}
const test=sample()
test()
function greetUser(fname){
    console.log(`welcome ${fname}`)
}

function getUser(callback){
let fname=prompt("enter your name")
callback(fname)
}
getUser(greetUser)

//object accessors
let user={
    fname:"peter",
    department:"HS",
    get dep(){
        return this.department
    },
    set dep(d){
        this.department=d
    }
}

console.log(user.dep)
user.dep="CSE"
console.log(user.dep)


class UserClass{
    constructor(un,email,pw){
        this.username=un,
        this.email=email,
        this.password=pw
    }
    getDetails(){
        console.log(`${this.username} - ${this.password}`)
    }
    setPassword(newpassword){
        this.password=newpassword
    }
}
const peter=new UserClass("peter","peter@gmail.com","peter123")
const henry=new UserClass("henry","henry@gmail.com","admin123")
console.log(peter.password)
peter.getDetails()
peter.setPassword("trainee01")
peter.getDetails()*/

/**
 object methods
 object metadata /properties
we can create a class using JS functions? is it possible ? how?
*/














