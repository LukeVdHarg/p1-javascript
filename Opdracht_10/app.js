Antwoord

function reset(){
  document.getElementById("addButton").style.backgroundColor = "gray"
  document.getElementById("subtractButton").style.backgroundColor = "gray"
  document.getElementById("multiplyButton").style.backgroundColor = "gray"
  document.getElementById("divideButton").style.backgroundColor = "gray"

  document.getElementById("Antwoord").innerText = "Rekenmachine"
}

function calculate(calculatorValue) {
  Number1 = Number(document.getElementById("input1").value)
  Number2 = Number(document.getElementById("input2").value)
  console.log(Number1, Number2, calculatorValue)
  if (Number1 > 0 && Number2 > 0) {
    if (calculatorValue == 1) {
      Antwoord = Number1 + Number2
      reset()
      document.getElementById("addButton").style.backgroundColor = "green"
    }
    else if (calculatorValue == 2){
      Antwoord = Number1 - Number2
      reset()
      document.getElementById("subtractButton").style.backgroundColor = "green"
    }
    else if (calculatorValue == 3){
      Antwoord = Number1 * Number2
      reset()
      document.getElementById("multiplyButton").style.backgroundColor = "green"
    }
    else if (calculatorValue == 4) {
      Antwoord = Number1 / Number2
      reset()
      document.getElementById("divideButton").style.backgroundColor = "green"
    }
    document.getElementById("Antwoord").innerText = "Het antwoord is: " + Antwoord
  }
  else {
    document.getElementById("Antwoord").innerText = "Het getal is te laag"
  }
}