fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{return response.json()}).then((res)=>console.log(res)).catch((err)=>console.log(err))
