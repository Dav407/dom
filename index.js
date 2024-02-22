// var heading = document.querySelector("h1")
// console.log(heading)
// var paragraph = document.querySelector("p")
// console.log(paragraph)

// var third = document.getElementById("third")
// console.log(third)
// var one = document.getElementById("one")
// console.log(one)

// var paragraph = document.querySelectorAll("p")
// console.log(paragraph)
// var paragraph = document.getElementsByClassName("pascal")
// console.log(paragraph)
// var paragraph = document.getElementsByTagName("h1")
// console.log(paragraph)


// var paragraph1 = document.querySelector("h3")
// console.log(paragraph1)
// var paragraph2 = paragraph1.getAttribute("class")
// console.log(paragraph2)

// var bod = document.querySelector("button")
// bod.setAttribute("class", "btn")
// console.log(bod)

// var achor = document.querySelector("a")
// achor.setAttribute("id","achor")
// console.log(achor)

// var jam =document.querySelector("h2")
// jam.removeAttribute("class")
// console.log(jam)

// var kon = document.querySelector("h5")
// kon.removeAttribute("id")
// console.log(kon)

var man = document.getElementById("manipulation")
man.style.color = "purple"
man.style.fontSize = "40px"
man.style.textDecoration = "underline"
man.style.fontWeight = "bold"




// creating a new paragraph
var newParagraph = document.createElement("p")

// creating A text node
var newContent = document.createTextNode("i am a new paragragh")

// adding the text node to the newly created paragraph
newParagraph.appendChild(newContent)

// adding the newly created paragraph and its content inside the dom
var bodyTag = document.getElementById("main")
document.body.appendChild(newParagraph,bodyTag)


var greet = document.getElementById("title").innerHTML
console.log(greet)

var div1 = document.getElementById("div1")
div1.innerHTML = "<p> i am a new div </p> "

var parent = document.getElementById("input")
var child = document.getElementById("ouput")
parent.removeChild(child)