    function ages(){
        let age = document.getElementById("age");
        let agechecker = parseInt(age.value);

        if(agechecker>21){
            console.log("you are allow to use computer")

        }
else if(agechecker>=18){
    console.log("you are  not allow to use computer")

    }
}
 document.getElementById("heading").innerHTML = "hello alina"
    console.log("asia khan");

function add(){
    let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

let inp1value = inp1.value
let inp2value = inp2.value

inp1value =parseInt(inp1value)
inp2value =parseInt(inp2value)

let lorum = document.getElementById("lorum")
lorum.innerHTML = console.log(inp1value+inp2value)

}
  
function sub(){
   let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

let inp1value = inp1.value
let inp2value = inp2.value

inp1value =parseInt(inp1value)
inp2value =parseInt(inp2value)

let Simply = document.getElementById("Simply")
Simply.innerHTML = console.log(inp1value - inp2value)

}
 

function multiply(){
    let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

let inp1value = inp1.value
let inp2value = inp2.value

inp1value =parseInt(inp1value)
inp2value =parseInt(inp2value)
console.log(inp1value * inp2value)
}
function divide(){
    let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

let inp1value = inp1.value
let inp2value = inp2.value

inp1value =parseInt(inp1value)
inp2value =parseInt(inp2value)
console.log(inp1value / inp2value)
}