//Create my buttons

let myNumbers = document.querySelector(".my-numbers")

//Loop to create my number-buttons
for (let i = 0; i <= 11; i++) {
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

//add paragraph to each of the buttons

let allButtons = document.querySelectorAll(".my-button")

allButtons.forEach(element => {
  newP = document.createElement("p")
  newP.setAttribute("class","my-p-button")
  element.appendChild(newP)
});


let allNumbers = ["7","8","9","4","5","6","1","2","3","0",".","C"]

let pNumbers = document.querySelector(".my-numbers").querySelectorAll(".my-p-button")

for (let i = 0; i <= 11; i++) {
  pNumbers[i].innerHTML = allNumbers[i]
}

let allOperators = ["+","-","/","*","%","="]

let pOperators = document.querySelector(".my-operators").querySelectorAll(".my-p-button")
console.log(pOperators)

for (let i = 0; i <= 5; i++) {
    pOperators[i].innerHTML = allOperators[i]
}

//want my "="-button to be bigger than the other ones, add class

let myResultButton = document.querySelectorAll(".my-button")[16]

myResultButton.classList.add("my-result-operator")


//declaration of variabled for all buttons

let myPResult = document.querySelector(".my-result")

myPResult.innerText = "WELCOME"

let arrayInputs = ""

let number

let operation

let result

let myArray = []

let lastOperand

let allOperands = ["+","-","*","/","%"]

allButtons.forEach(element => {
  element.addEventListener("click",()=>{
    myPResult.innerText = "WELCOME"
    number = ""

    if(allOperands.includes(element.innerText) && allOperands.includes(lastOperand)){
      myPResult.innerText = "ERROR"
      myArray = []
      number = ""
      lastOperand = ""
      console.log(lastOperand)
    } else {
      if(element.innerText != "=" && element.innerText != "C"){
        myArray.push(element.innerText) 
        myArray.forEach(element => {
          number += element
          myPResult.innerText = number
        });
        lastOperand = ""
      } else if (element.innerText == "="){
        myArray.forEach(element => {
          number += element
        });

        try{
          result = eval(number)
          myPResult.innerText = result
        } catch(err){
          myPResult.innerText = "ERROR"
        }
        //empty array each time so my newly clicked numbers are not added to my calculation string
        myArray = []
        lastOperand = ""
      } else if(element.innerText == "C"){
        myArray = []
        number = ""
        lastOperand = ""
      }
    }
    //Stock the element in a variable in case it is an operador to be able to compare it with my new input above
    if(element.innerText == "+" || element.innerText == "-" || element.innerText == "*"|| element.innerText == "/"|| element.innerText == "%"){
      lastOperand = element.innerText
      console.log(lastOperand)
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













