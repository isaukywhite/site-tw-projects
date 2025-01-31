<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Footer from "@/components/Layout/Footer.vue";
import fetchUserName from "./api/fetchUsername";
import createUserIfNotExists from "./api/createUserIfNotExists";
import { useTwitchStore } from "@/stores/useTwitchStore";
import Cookies from "js-cookie";

onMounted(async () => {
  const accessToken = Cookies.get("access_token");
  if (accessToken) {
    const twitchStore = useTwitchStore();
    await fetchUserName(accessToken);
    await createUserIfNotExists(twitchStore.username);
  }
});
</script>

<template>
  <main class="min-h-[100dvh] flex flex-col justify-around lg:px-8 mb-[72px] lg:mb-0">
    <Breadcrumb />
    <RouterView />
    <Footer />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
