/*document.getElementById("para1").innerText="this is created dynamically"
document.getElementById("para2").innerHTML="<h1>para2</h1>"

setTimeout(()=>{document.getElementById("img1").src="Sample Pictures/Desert.jpg"},5000)

//object collections

console.log(document.head)
console.log(document.body)
console.log(document.title)
document.title="new title"

setTimeout(()=>{document.getElementById("heading1").style.backgroundColor="red"},3000)

setInterval(()=>{console.log("test")},3000)
function changeBG(){
    document.getElementById("heading1").style.backgroundColor="red"
}
function changeText(){
    document.getElementById("para1").innerText="this is created dynamically"
}

const btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    console.log("test")
    document.getElementById("para2").innerText="this is created dynamically for para2"
})
console.log(document.body.childNodes[1])
console.log(document.body.lastChild)
console.log(document.getElementById("div1").firstChild.nextSibling)
console.log(document.getElementById("div1").lastChild.previousSibling)*/
function changeText(){
    let element=document.createElement("p")
    let textNode=document.createTextNode("this para is create")
    element.style.backgroundColor="red"
    element.id="para1"
    element.appendChild(textNode)
    console.log(element)
  let parent=document.getElementById("container")
  parent.appendChild(element)
}
function deleteText()
{
    let parent=document.getElementById("container")
    let child=document.getElementById("para1")
    parent.removeChild(child)

}


