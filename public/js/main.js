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

//declaration of variabled for all buttons

let myPResult = document.querySelector(".my-result")

let arrayInputs = ""

let number

let operation

let result

let myArray = []

allButtons.forEach(element => {
  element.addEventListener("click",()=>{
    myPResult.innerText = ""
    number = ""
    if(element.innerText != "="){
      myArray.push(element.innerText) 
    } else{
      myArray.forEach(element => {
        number += element
      });
      console.log(number)
      result = eval(number)
      myPResult.innerText = result
      //
      myArray = []
    }
  })
});



// let result

// for (let i = 0; i < arrayInputs.length; i++) {
//   if(arrayInputs[i] == "+" || arrayInputs[i] == "-" || arrayInputs[i] == "/" || arrayInputs[i] == "*" || arrayInputs[i] == "%") {
//   let newArray = []
//   newArray.push(arrayInputs[i],i)
//   myObject['element' + i] = newArray;
//   console.log(myObject)
//   }
// }

// for (let i = 0; i < arrayInputs.length; i++) {
//   if (arrayInputs[i] == "+" && arrayInputs[i] == "-" && arrayInputs[i] == "/" && arrayInputs[i] == "*" && arrayInputs[i] == "%") {
//     index = i
//   } else {
//     for(let y = 0; y < index ;y++){
//     number += arrayInputs[i]
//     }
  
  // if (arrayInputs[i] != "+" && arrayInputs[i] != "-" && arrayInputs[i] != "/" && arrayInputs[i] != "*" && arrayInputs[i] != "%") {
  //   number += element
  //   console.log(number)
  // } else{
  //   operation = element
  //   console.log(operation)
  // }













