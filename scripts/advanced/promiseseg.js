/*const fetchUser=new Promise((resolve,reject)=>{
let user;
user?resolve("successfuly executed"):reject(new Error("user is not defined"))
})
fetchUser.then((response)=>console.log(response)).catch((err)=>console.log(err))*/
/*const fetchUser=new Promise((resolve,reject)=>{
    let user={
        fname:"john",
        email:"john@gmail.com",
        role:"Trainer"
    };
    user?resolve(user):reject(new Error("user is not defined"))
    })
    fetchUser.then((response)=>{
        if(response.role==="Admin"){
            return "you are allowed"
        }
        else{
            return "not allowed"
        }
    }).then((result)=>console.log("level 2",result))
    .catch((err)=>console.log("",err))*/


    const fetchUser=new Promise((resolve,reject)=>{
        let user={
            fname:"john",
            email:"john@gmail.com",
            role:"Admin"
        };
        user?resolve(user):reject(new Error("user is not defined"))
        })
        fetchUser.then((response)=>{
            let promise2=new Promise((resolve,reject)=>{
                if(response.role==="Admin"){
                    resolve("access is granted")
                }
                else{
                    reject(new Error("access is denied"))
                }
            })
            return promise2
        }).then((result)=>console.log("level 2",result))
        .catch((err)=>console.log("",err))








