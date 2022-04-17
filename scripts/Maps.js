let map=new Map()
map.set("fname","john")
map.set("cgpa",9.0)
map.set(true,"placed")
map.set("demo","arrears")
map.set("demo1","arrears")
map.set("demo2","arrears")
/*map.delete(false)
console.log(map.size)
map.clear()
console.log(map.size)
console.log(map.get("fname"))
console.log(map.get(true))
console.log(map.has("fname"))
console.log(map.has("age"))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
for(let props of map.keys()){
    console.log(props)
}
for(let values of map.values()){
    console.log(values)
}*/
for(let pair of map.entries()){
    console.log(pair[0],pair[1])
}



