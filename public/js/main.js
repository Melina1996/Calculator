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
  myOperatorButton.setAttribute("operator","")
  myOperators.appendChild(myOperatorButton)
}


//add paragraph to each of the buttons

let allButtons = document.querySelectorAll(".my-button")

allButtons.forEach(element => {
  newP = document.createElement("p")
  newP.setAttribute("class","my-p-button")
  element.appendChild(newP)
});

//assign values to my paragraphs (1)numbers && (2)operators
let allNumbers = ["7","8","9","4","5","6","1","2","3","0",".","C"]

let pNumbers = document.querySelector(".my-numbers").querySelectorAll(".my-p-button")

for (let i = 0; i <= 11; i++) {
  pNumbers[i].innerHTML = allNumbers[i]
}

let allOperators = ["+","-","/","*","%","="]

let pOperators = document.querySelector(".my-operators").querySelectorAll(".my-p-button")

for (let i = 0; i <= 5; i++) {
    pOperators[i].innerHTML = allOperators[i]
}

//want my "="-button to be bigger than the other ones, add class

let myResultButton = document.querySelector(".my-operators").querySelectorAll(".my-button")[5]

myResultButton.classList.add("my-result-operator")


//declaration of all my other necessary variables

let myPResult = document.querySelector(".my-result")

//all my variables
myPResult.innerText = "WELCOME"

let arrayInputs = ""

let calculation

let operation

let result

let myArray = []

let lastOperand

let allOperands = ["+","-","*","/","%"]

let allColors = ["colorOne","colorTwo","colorThree","colorFour","colorFive"]

allButtons.forEach(element => {
  element.addEventListener("click",()=>{

    myPResult.innerText = "WELCOME"
    calculation = ""

//each round I check if the last clicked button was an operator and if the current clicked button is one as well, in that case ERROR
    if(allOperands.includes(element.innerText) && allOperands.includes(lastOperand)){
      myPResult.innerText = "ERROR"
      lastOperand = ""
    } else {
      if(element.innerText != "=" && element.innerText != "C"){
        myArray.push(element.innerText) 
        myArray.forEach(element => {
          calculation += element
          myPResult.innerText = calculation
        });
        lastOperand = ""
      } else if (element.innerText == "="){
        myArray.forEach(element => {
          calculation += element
        });

        try{
          result = eval(calculation)
          myPResult.innerText = result
          //random index to select a random color
          index = Math.floor(Math.random()*allColors.length)
          //my random color
          style = allColors[index]
          switch (style) {
            case "colorOne":
              document.body.classList.add("change-color-one")
              break;
            case "colorTwo":
              document.body.classList.add("change-color-two")
              break;
            case "colorThree":
              document.body.classList.add("change-color-three")
            break;
            case "colorFour":
              document.body.classList.add("change-color-four")
            break;
            case "colorFive":
              document.body.classList.add("change-color-five")
            break;
            default:
              break;
          }
        } catch(err){
          myPResult.innerText = "ERROR"
        }
        //empty array each time so my newly clicked numbers are not added to my calculation string
        myArray = []
        lastOperand = ""
        calculation = ""

      } else if(element.innerText == "C"){
        myArray = []
        calculation = ""
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


