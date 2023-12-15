import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import ablyLogo from '/ably-motif-col-rgb.svg'
import { setupCounter } from './counter.ts'
import * as Ably from 'ably/promises'

const client = new Ably.Realtime.Promise({ authUrl: '/api/ably/token/' });

client.connection.on((stateChange) => {
  document.querySelector<HTMLElement>('#state')!.innerHTML = stateChange.current;
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://ably.com" target="_blank">
      <img src="${ablyLogo}" class="logo ably" alt="Ably logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <p>Realtime Connection Status: <span id="state"></span></p>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
