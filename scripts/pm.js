let pm=new Promise((resolve,reject)=>{
let user={
    fname:"joi"
};

if(user){
    resolve(user)
}
else{
    reject(new Error("no user found"))
}
})
pm.then((res)=>{
    return new Promise((res,rej)=>{
        res("second level")
})}).then((res)=>console.log(res))
pm.catch((err)=>console.log(err.message))