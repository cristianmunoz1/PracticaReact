import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WelcomeComponent } from './components/WelcomeComponent'

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUsername] = useState("");
  const [ isUserLogged, setIsUserLogged] = useState(false);

  useEffect(()=> {
    console.log("Cambiando is user log");
    setIsUserLogged(true);
  }, [])

  useEffect(() => {
    if(count == 1500) {
      console.log("El count llegó a 1500");
    }
  }, [count])

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 500)}>
          Soy un contador {count}
        </button>
        <hr />
        {(count > 1000) && <WelcomeComponent usuarioActivo = {true}/>}
      </div>
    </div>
  )
}

export default App
