function fetchUser(){
const promiseobj=new Promise((resolve,reject)=>{
    let user;
    user?resolve("successfuly executed"):reject(new Error("user is not defined"))
    })
return promiseobj
}
/*fetchUser().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
async function caller(){
try{
    const result=await fetchUser()
    console.log(result)
}
    catch(err){
        console.log(err)
    }
}
caller()



