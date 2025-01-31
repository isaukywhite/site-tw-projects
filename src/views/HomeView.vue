<script setup lang="ts">
import { useTwitchStore } from "@/stores/useTwitchStore";
import Cookies from "js-cookie";
import RouterLink from "@/tags/RouterLink.vue";

const VITE_TWITCH_REDIRECT_URL = import.meta.env.VITE_TWITCH_REDIRECT_URL;
const VITE_TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;
const accessToken = Cookies.get("access_token");
const twitchStore = useTwitchStore();

function loginWithTwitch() {
  const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${VITE_TWITCH_CLIENT_ID}&redirect_uri=${VITE_TWITCH_REDIRECT_URL}&response_type=token&scope=user:read:email`;
  window.location.href = twitchAuthUrl;
}
</script>

<template>
  <section class="flex flex-col gap-4 items-center text-center px-4 md:px-8">
    <span class="text-xl md:text-2xl lg:text-3xl font-semibold text-destructive">TWITCH PROJECTS</span>
    <h1 class="text-4xl md:text-6xl lg:text-7xl">
      <span class="bg-gradient">Next Generation</span> <br />
      <span class="text-textForeground">Twitch Streamers Tools</span>
    </h1>
    <p class="text-lg md:text-xl lg:text-2xl">Use ferramentas intuitivas e desenvolvidas por <strong
        class="text-lg md:text-xl lg:text-2xl">pessoas
        como
        você</strong>. <br />
      Traga um toque especial para suas streams.</p>
    <button v-if="!accessToken"
      class="bg-purple hover:scale-110 ease-in-out duration-150 text-white py-2 px-4 rounded mt-4"
      @click="loginWithTwitch">
      Login com Twitch
    </button>
    <div v-else class="flex flex-col items-center">
      <p class="text-lg md:text-xl lg:text-2xl text-text">Bem-vindo, {{ twitchStore.username }}!</p>
      <RouterLink to="/raffle"
        class="bg-purple hover:scale-110 ease-in-out duration-150 text-white py-2 px-4 rounded mt-4">
        Ver Meu Sorteio
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="css">
.bg-gradient {
  background: #9146FF;
  background: linear-gradient(to right, #9146FF 0%, #C022FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
