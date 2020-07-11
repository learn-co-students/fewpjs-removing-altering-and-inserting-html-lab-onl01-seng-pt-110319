// Write your code here!
document.querySelector("main").remove()
let element=document.createElement("h1")
document.body.appendChild(element)
document.querySelector("h1").id="victory"
let newHeader=document.querySelector("h1#victory")
newHeader.innerHTML="Caitlin is the champion"
