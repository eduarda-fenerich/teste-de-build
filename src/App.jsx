import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from "./imagens/Pa.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Patrick meu cachorro perfeito</h1>
     <img src={img} alt="" />
    </>
  )
}

export default App
