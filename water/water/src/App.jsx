import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  
  var userInput = ""
  var firstValue = 0
  var operator = ""
  var result = 0
  var secondValue = 0

  const handleChange = (value) => {
    userInput += value
    document.getElementById("result").innerHTML = userInput
  }

  // Changes the operator +, -, *, /, changes firstValue to userInput integer
  const handleChange2 = (value) => {
    
    firstValue = +userInput
    userInput = ""
    console.log(`First value: ${firstValue}`)
    operator = value
  }

  const handleChange3 = () => {
    secondValue = +userInput
    switch (operator) {
      case "+":
        result += firstValue + secondValue
        document.getElementById("result").innerHTML = result
        console.log(`Result: ${result}`)
        break;
      case "-":
        result += firstValue - secondValue
        document.getElementById("result").innerHTML = result
        console.log(`Result: ${result}`)
        break;
      case "*":
        result += firstValue * secondValue
        document.getElementById("result").innerHTML = result
        console.log(`Result: ${result}`)
        break;
      case "/":
        result += firstValue / secondValue
        document.getElementById("result").innerHTML = result
        console.log(`Result: ${result}`)
        break;
    
      default:
        break;
    }
  }
  
  const handleChange4 = () => {
    userInput = ""
    firstValue = 0
    secondValue = 0
    operator = ""
    result = 0
    document.getElementById("result").innerHTML = "0"
  }

  return (
    <>
    <div className="container">
      <div className="grid-container">
        <div className="result">
          <p id="result">0</p>
        </div>
        <button className="grid-item1 number" onClick={() => handleChange(1)}>1</button>
        <button className="grid-item2 number" onClick={() => handleChange(2)}>2</button>
        <button className="grid-item3 number" onClick={() => handleChange(3)}>3</button>
        <button className="grid-item4 number" onClick={() => handleChange(4)}>4</button>
        <button className="grid-item5 number" onClick={() => handleChange(5)}>5</button>
        <button className="grid-item6 number" onClick={() => handleChange(6)}>6</button>
        <button className="grid-item7 number" onClick={() => handleChange(7)}>7</button>
        <button className="grid-item8 number" onClick={() => handleChange(8)}>8</button>
        <button className="grid-item9 number" onClick={() => handleChange(9)}>9</button>
        <button className="operation" onClick={() => handleChange2("+")}>+</button>
        <button className="number" onClick={() => handleChange(0)}>0</button>
        <button className="operation" onClick={() => handleChange2("-")}>-</button>
        <button className="operation" onClick={() => handleChange2("*")}>*</button>
        <button className="operation" onClick={() => handleChange2("/")}>/</button>
        <button className="operation" onClick={() => handleChange3("=")}>=</button>
        <button className="grid-item10" onClick={() => handleChange4("C")}>C</button>
      </div>
      </div>
    </>
  )
}

export default App
