function fetchUser(){
    console.log("func is hit")
    let user;
    const userPromise=new Promise((resolve,reject)=>{
    user?resolve(user):reject(new Error("user is empty"))
    })
    return userPromise;
}
/*fetchUser().then((result)=>console.log(result)).catch((err)=>console.log(err))*/
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

