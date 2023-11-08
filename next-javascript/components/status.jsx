'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useConnectionStateListener } from 'ably/react'

export default function Status() {

    const [state, setState] = useState('')
    useConnectionStateListener((stateChange) => {
      setState(stateChange.current)
    });
  
    return (
        <p><span>Realtime Connection Status: {state}</span></p>
    )
}