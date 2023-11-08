import { createSignal } from 'solid-js'
import Ably from 'ably/promises'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  const client = new Ably.Realtime.Promise({ authUrl: '/api/ably/token/' });

  const [state, setState] = createSignal('')
  client.connection.on((stateChange:Ably.Types.ConnectionStateChange) => {
    setState(stateChange.current);
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://ably.com" target="_blank">
          <img src={solidLogo} class="logo ably" alt="Ably logo" />
        </a>
      </div>
      <h1>Vite + Solid + Ably</h1>
      <div class="card">
      <p><span>Realtime Connection Status: {state()}</span></p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite, Solid and Ably logos to learn more
      </p>
    </>
  )
}

export default App