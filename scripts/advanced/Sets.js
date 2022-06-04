let set=new Set()
set.add("john")
set.add("john")
set.add("peter")
//set.delete("john")
console.log(set)
//console.log(set.has("john"))
//console.log(set.size)
for(let value of set.keys()){
    console.log(value)
}
for(let value of set.values()){
    console.log(value)
}
