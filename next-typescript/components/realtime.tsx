'use client'

import Image from "next/image";
import Ably from "ably/promises";
import { AblyProvider } from "ably/react";
import Status from './status'

export default function Realtime() {
  const client = new Ably.Realtime.Promise({ authUrl: "/api/ably/" });

  return (
    <AblyProvider client={client}>
      <Status />
    </AblyProvider>
  );
}
