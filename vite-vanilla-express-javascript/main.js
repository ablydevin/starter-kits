import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import ablyLogo from '/ably-motif-col-rgb.svg'
import { setupCounter } from './counter.js'
import * as Ably from 'ably/promises'

const client = Ably.Realtime.Promise({ authUrl: '/api/ably/token/' });

client.connection.on((stateChange) => {
  document.querySelector('#state').innerHTML = stateChange.current;
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://ably.com" target="_blank">
      <img src="${ablyLogo}" class="logo ably" alt="Ably logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <p>Realtime Connection Status: <span id="state"></span></p>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
