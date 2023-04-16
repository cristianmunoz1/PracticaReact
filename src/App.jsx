import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WelcomeComponent } from './components/WelcomeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Soy un contador {count}
        </button>
        <hr />
        <WelcomeComponent usuarioActivo={true} name="Cristian"/>
      </div>
    </div>
  )
}

export default App
