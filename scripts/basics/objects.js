

/*console.log(users["fname"])
console.log(users.fname)
console.log(users)
users.designation="Senior System Engineer"
console.log(users)
if("designation" in users){
    console.log("property already exists")
}
else{
    users.designation="Senior System Engineer"
    console.log(users) 
 
}
"designation" in users? console.log("property already exists")
: users.designation="Senior System Engineer" 
console.log(users) 
let sample={
    demo:null
}
console.log("demo" in sample)//true
let users={
    fname:"john",
    role:"admin",
    loggedIn:true,
    designation:"ASE"
}
console.log(users)
delete users.role
console.log(users)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))
let users={
    fname:"john",
    2:"admin",
    3:"loggedin",
    4:"ASE"
}
console.log(users[2])*/
let users={
    fname:"john",
    role:"admin",
    loggedIn:true,
    designation:"ASE"
}
for(let props in users){
    console.log(users[props])//
}

