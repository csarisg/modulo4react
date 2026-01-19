import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Componentes de las actividades
import { Saludo } from "./components/Saludo"
import Despedida from "./components/Despedida"
import ListaTareas from "./components/ListaTareas"
import Productos from "./components/Productos"

function App() {
  const [count, setCount] = useState(0)

  // Actividad 1: tareas
  const tareas = ["Estudiar React", "Hacer ejercicios", "Subir a GitHub"]

  // Actividad 3: productos
  const productos = [
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 300 }
  ]

  return (
    <>
      {}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* ACTIVIDADES */}
      <hr />

      {/* JSX + export nombrado */}
      <Saludo />

      {/* Actividad 1: Lista de tareas */}
      <h3>Tareas</h3>
      <ListaTareas tareas={tareas} />

      {/* Actividad 3: Productos */}
      <h3>Productos</h3>
      <Productos productos={productos} />

      {/* export default */}
      <Despedida />
    </>
  )
}

export default App

