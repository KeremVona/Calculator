import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  var userInput = ""
  var firstValue = 0
  var operator = ""
  var result = 0
  var secondValue = 0

  const handleChange = (value) => {
    alert(`Button value: ${value}`)
    userInput += value
  }

  // Changes the operator +, -, *, /, changes firstValue to userInput integer
  const handleChange2 = (value) => {
    alert(`Button value: ${value}`)
    
    firstValue = +userInput
    userInput = ""
    console.log(`First value: ${firstValue}`)
    operator = value
  }

  const handleChange3 = () => {
    alert(`userInput: ${userInput}`)
    secondValue = +userInput
    switch (operator) {
      case "+":
        result += firstValue + secondValue
        document.getElementById("result").innerHTML = "Result: " + result
        console.log(`Result: ${result}`)
        break;
      case "-":
        result += firstValue - secondValue
        document.getElementById("result").innerHTML = "Result: " + result
        console.log(`Result: ${result}`)
        break;
      case "*":
        result += firstValue * secondValue
        document.getElementById("result").innerHTML = "Result: " + result
        console.log(`Result: ${result}`)
        break;
      case "/":
        result += firstValue / secondValue
        document.getElementById("result").innerHTML = "Result: " + result
        console.log(`Result: ${result}`)
        break;
    
      default:
        break;
    }
  }
  
  return (
    <>
      <button onClick={() => handleChange(1)}>1</button>
      <button onClick={() => handleChange(2)}>2</button>
      <button onClick={() => handleChange(3)}>3</button>
      <button onClick={() => handleChange(4)}>4</button>
      <button onClick={() => handleChange(5)}>5</button>
      <button onClick={() => handleChange(6)}>6</button>
      <button onClick={() => handleChange(7)}>7</button>
      <button onClick={() => handleChange(8)}>8</button>
      <button onClick={() => handleChange(9)}>9</button>
      <button onClick={() => handleChange(0)}>0</button>
      <button onClick={() => handleChange2("+")}>+</button>
      <button onClick={() => handleChange2("-")}>-</button>
      <button onClick={() => handleChange2("*")}>*</button>
      <button onClick={() => handleChange2("/")}>/</button>
      <button onClick={() => handleChange3("=")}>=</button>
      <p id="result">1</p>
    </>
  )
}

export default App
