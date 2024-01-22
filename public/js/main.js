//Create my buttons

let myNumbers = document.querySelector(".my-numbers")

//Loop to create my number-buttons
for (let i = 0; i <= 10; i++) {
  myNumberButton = document.createElement("button")
  myNumberButton.setAttribute("class","my-button")
  myNumbers.appendChild(myNumberButton)
}

let myOperators = document.querySelector(".my-operators")
//Loop to create my operator-buttons
for (let i = 0; i <= 5; i++) {
  myOperatorButton = document.createElement("button")
  myOperatorButton.setAttribute("class","my-button")
  myOperators.appendChild(myOperatorButton)
}
console.log(myOperators)
let myResultButton = document.querySelectorAll(".my-button")[16]

myResultButton.classList.add("my-result-operator")

//add paragraph to each of the buttons

let allButtons = document.querySelectorAll(".my-button")

allButtons.forEach(element => {
  newP = document.createElement("p")
  newP.setAttribute("class","my-p-button")
  element.appendChild(newP)
});

let allPs = document.querySelectorAll(".my-p-button")

document.querySelectorAll(".my-p-button")[0].innerText = "7"
document.querySelectorAll(".my-p-button")[1].innerText = "8"
document.querySelectorAll(".my-p-button")[2].innerText = "9"
document.querySelectorAll(".my-p-button")[3].innerText = "4"
document.querySelectorAll(".my-p-button")[4].innerText = "5"
document.querySelectorAll(".my-p-button")[5].innerText = "6"
document.querySelectorAll(".my-p-button")[6].innerText = "1"
document.querySelectorAll(".my-p-button")[7].innerText = "2"
document.querySelectorAll(".my-p-button")[8].innerText = "3"
document.querySelectorAll(".my-p-button")[9].innerText = "0"
document.querySelectorAll(".my-p-button")[10].innerText = "."

document.querySelectorAll(".my-p-button")[11].innerText = "+"
document.querySelectorAll(".my-p-button")[12].innerText = "-"
document.querySelectorAll(".my-p-button")[13].innerText = "/"
document.querySelectorAll(".my-p-button")[14].innerText = "*"
document.querySelectorAll(".my-p-button")[15].innerText = "%"
document.querySelectorAll(".my-p-button")[16].innerText = "="










