

/*let users=["john","peter","henry"]
users[1]="mary"
console.log(users[1])
for(let i=0;i<users.length;i++){
console.log(`${users[i]} at ${i} `)//users[0] [1] [2]
//john at 0 index
//peter at 1 index
//henry at 2 index
}

console.log(users.toString()) -> sepeartor is a comma

console.log(users.join(" "))// custom seperator
let users=["john","peter","henry"]
users.push("mary")
users.push("justin","xyz")
users.pop()
users.shift()
users.unshift("shruthi","jaya")
console.log(users)
//push pop shift unshift returns the len of the array
let users=["john","peter","henry"]
delete users[1]
console.log(users)

users.splice(1,0,"mary")// returns an empty array
let users=["john","peter","henry"]
console.log(users.splice(1,2,"mary"))//returns an array with deleted elements
console.log(users)
users.splice(1,2)
console.log(users)
let users=["john","peter","henry"]
let userroles=users.concat(["admin","trainee"])
//concat returns a new array (concatenated array)
console.log(users)
console.log(userroles)
let users=["john","peter","henry","mary","justin","emelia"]
let new_users=users.slice(1)//returns new array with the sliced elements
let user1=users.slice(1,4)
let user2=users.slice(-5,-1)
console.log(new_users)
console.log(users)
console.log(user2)
let users=["john","peter","henry","mary","justin","emelia"]
console.log(users.reverse())//returns new array

//transform methods in array
const sample=()=>{
    console.log("test")
}
let users=["john","peter","henry","mary","justin","emelia"]
users.forEach(
    (user,i)=>{//element and index
        console.log(`${user} at ${i} index`)
    }
)
users.forEach(
    (user)=>{//element
        console.log(`${user} at ${i} index`)
    }
)
let age=[12,56,45,34,12]
let updatedage=age.map(
    (item)=> item+2 //returns array
)
console.log(updatedage)
let users=["john","peter","henry","mary","justin","emelia","henry"]
let retvalue=users.find(
    (item,i)=>item==="henry"

)
let retvalue1=users.filter(
    (item,i)=>item==="henry"

)
console.log(retvalue)
console.log(retvalue1)
let users=["john","peter","henry","mary","justin","emelia","henry"]
let res=users.filter(
    (item)=>item.length>5//array of elements
)
let res1=users.find(
    (item)=>item.length>5//return element
)
console.log(res)//all items matching the condtion
console.log(res1)//first item matching the condition
let users=["john","peter","henry","mary","justin","emelia","henry"]
let res=users.findIndex(
    (item)=>item==="henry"
)
console.log(res)*/
let users=["john","peter","henry","mary","justin","emelia","henry"]
let res=users.findIndex(
    (item)=>item==="henry"
)//index
console.log(res)

console.log(users.indexOf("henry"))//number//number
console.log(users.lastIndexOf("henry"))
console.log(users.includes("shrthi"))//boolean







