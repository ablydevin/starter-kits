import { useState } from 'react'
import { useConnectionStateListener } from 'ably/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ablyLogo from './assets/ably-motif-col-rgb.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [state, setState] = useState('')
  useConnectionStateListener((stateChange) => {
    setState(stateChange.current)
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://ably.com" target="_blank">
          <img src={ablyLogo} className="logo ably" alt="Ably logo" />
        </a>
      </div>
      <h1>Vite + React + Ably</h1>
      <div className="card">
        <p><span>Realtime Connection Status: {state}</span></p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Ably logos to learn more
      </p>
    </>
  )
}

export default App
