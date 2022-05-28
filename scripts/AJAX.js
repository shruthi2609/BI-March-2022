const xhr=new XMLHttpRequest()
xhr.open('GET',"https://jsnplaceholder.typicode.com/to")
xhr.responseType="json"
xhr.onload=function(){
    console.log(xhr.response)
}
xhr.onerror=function(){
    console.log("error occured")
}
xhr.send()
/*
BROWSER API'S
1.History : 
back()
forward()
go(1)
*/
/*localStorage.setItem("sample","can save some user data")
localStorage.setItem("demo","can save some user data")
localStorage.removeItem("sample")
console.log(localStorage.getItem("sample"))
console.log(localStorage.key(2))
localStorage.clear()*/