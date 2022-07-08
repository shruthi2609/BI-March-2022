/*new Promise((resolve,reject)=>{
let user={
    fname:"john",
    role:"Admin"
};
if(user){
resolve("user is fetched")
}
else{
reject("user is not fetched")
}
user?resolve(user):reject(new Error("user is empty"))
}).then((result)=>console.log(result)).catch((rej)=>console.log(rej)).finally(()=>console.log("end"))*/
let fetchUser=new Promise((resolve,reject)=>{
    let user={
        fname:"john",
        role:"trainee"
    };
    if(user){
    resolve(user)
    }
    else{
    reject("user is not fetched")
    }
    user?resolve(user):reject(new Error("user is empty"))
    })
fetchUser
.then((result1)=>{
    console.log("level 1")
    return result1})
.then((result2)=>{
    console.log("leel 2")
    let message=new Promise((resolve,reject)=>{
    result2.role==="admin"?resolve(result2):reject(new Error("user role is not admin"))
    })
    return message

}).then((message)=>console.log("level3",message))
.catch((rej)=>console.log(rej))
.finally(()=>console.log("end"))


