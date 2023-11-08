import React from 'react'
import Ably from 'ably/promises'
import { AblyProvider } from 'ably/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const client = Ably.Realtime.Promise({ authUrl: '/api/ably/token/' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AblyProvider client={ client }>
      <App />
    </AblyProvider>
  </React.StrictMode>,
)
