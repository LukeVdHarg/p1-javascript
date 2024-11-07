function calculate(Number1, Number2){ // Oefening 1
  console.log(Number1 + Number2)
  document.getElementById("Text").innerText = Math.round(Number1 + Number2)
}

function calculateTime() { // Oefening 3
  Seconds = document.getElementById("timeInput").value || 0
  if (Seconds >=60) {
    Hours = Math.floor(Seconds/3600) || 0
    if (Hours < 10){Hours = "0"+Hours}
    console.log(Hours)
    Minutes = Math.round((Seconds % 3600)/60) || 0
    if (Minutes < 10){Minutes = "0"+Minutes}
    Seconds = Seconds % 60
    if (Seconds < 10){Seconds = "0"+Seconds}
    console.log(Hours, Minutes, Seconds)
    TotalTime = Hours + ":" + Minutes + ":" + Seconds
    document.getElementById("calculatedTime").innerText = TotalTime + " in H:M:S" + " ... of " + (Number(Minutes) + (Number(Hours)*60)) + " minuten" // En alleen de minuten nu
  }
  else if (Seconds >0) {
    document.getElementById("calculatedTime").innerText = Seconds + " seconds" 
  }
  else {
    document.getElementById("calculatedTime").innerText = ""
  }
}

function multiplyBy5() { // Oefening 2
  Number = document.getElementById("inputBox").value || 0
  MultipliedNumber = Number*5
  console.log(MultipliedNumber)
  if (MultipliedNumber >0) {
    document.getElementById("Answer").innerText = Number + " * 5 = " + MultipliedNumber
  }
  else {
    document.getElementById("Answer").innerText = ""
  }
}

function changeText() {
  document.getElementById('Text').style.color = 'red'
  document.getElementById("Text").innerText = "Nieuwe tekst 2"
  document.getElementById("Text").style.textAlign = "center"

  calculate(Math.random(1,5)*10, Math.random(1,50)*10)
}

// ------------------------------ Niet deel van opdracht 6 ------------------------------
calcNumber1 = null
currentValue = null

function calculator(calcValue) {
  if (calcValue < 4) {
    console.log("Value = " + calcValue + " starting first function.")
    if (calcNumber1 == null) {
      calcNumber1 = document.getElementById ("calculatorInput").value
      console.log(calcNumber1)
      currentValue = calcValue
      console.log("Set currentvalue to: " + currentValue)
      document.getElementById("calculatorInput").value = null
    }
    else {
      calcNumber2 = document.getElementById ("calculatorInput").value
      console.log("Value = " + calcValue)
      if (calcValue == 1){
        console.log("Adding")
        Result = +calcNumber1 + +calcNumber2
      }
      else if (calcValue == 2){
        console.log("Multiplying")
        Result = +calcNumber1 * +calcNumber2
      }
      else if (calcValue == 3){
        Result = +calcNumber1 / +calcNumber2
      }
      currentValue = calcValue
      console.log("Set currentvalue to: " + currentValue)
      calcNumber1 = Result
      document.getElementById ("calcAnswer").innerText = Math.round(Result)
      document.getElementById("calculatorInput").value = null
    }
  }
  else if (calcValue >= 4) {
    if (calcValue == 4){
      console.log("CurrentValue = " + currentValue)
      if (currentValue == 1){
        console.log("Adding")
        Result = +calcNumber1 + +document.getElementById("calculatorInput").value || 1
      }
      else if (currentValue == 2){
        console.log("Multiplying")
        Result = +calcNumber1 * +document.getElementById("calculatorInput").value || 1
      }
      else if (currentValue == 3){
        Result = +calcNumber1 / +document.getElementById("calculatorInput").value || 1
      }
      else {
      }
      currentValue = 0
      calcNumber1 = Result
      document.getElementById("calculatorInput").value = null
      document.getElementById ("calcAnswer").innerText = Math.round(Result)
    }
    else if (calcValue == 5){
      currentValue = 0
      calcNumber1 = null
      document.getElementById("calculatorInput").value = null
      document.getElementById ("calcAnswer").innerText = ""
    }
  }
}

