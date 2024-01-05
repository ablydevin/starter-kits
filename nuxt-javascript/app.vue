<script setup>
import { ref } from 'vue'
import Ably from 'ably/promises'

const client = new Ably.Realtime.Promise({ authUrl: 'api/ably/' });

const state = ref('');
client.connection.on((stateChange) => {
  state.value = stateChange.current;
});
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
  <div>
    <p><span>Realtime Connection Status: {{ state }}</span></p>
  </div>
</template>
   
