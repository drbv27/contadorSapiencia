import React, { useState } from 'react';
import './App.css'
import Boton from './components/Boton';
import Display from './components/Display';

function App() {
  const [contador,setContador] = useState(0)

  const handleAdd = () => {
    setContador(contador+1)
  }
  const handleSubstract = () => {
    setContador(contador-1)
  }
  const handleReset = () => {
    setContador(0)
  }

  return (
    <div className="App">
      <h1>Mi Contador</h1>
      <Display counterValue={contador}/>
      <Boton functionH={handleAdd} icon={"⬆️"} />
      <Boton functionH={handleReset} icon={"🔄"} />
      <Boton functionH={handleSubstract} icon={"⬇️"} />
    </div>
  )
}

export default App

