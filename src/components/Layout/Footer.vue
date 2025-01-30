<script setup lang="ts">
import RouterLink from "@/tags/RouterLink.vue";
import ToggleTheme from "@/components/ToggleTheme.vue";
import Link from "@/tags/Link.vue";
import {FooterDto} from "@/components/Dto/Layout/FooterDto";
import {useRoute} from "vue-router";
import {GithubLogoIcon} from "@radix-icons/vue";

const route = useRoute();
</script>

<template>
    <footer class="layout fixed bottom-0 lg:relative lg:container justify-center min-w-full border-t text-dark">
        <ul class="hidden lg:flex gap-0 flex-row justify-around items-end w-full py-12">
            <li class="flex flex-col gap-4">
                <h2 class="text-text">Twitch Projects</h2>
                <span>© 2025 Twitch Projects | Open Source for Streamers | I2 Tech & Dev</span>
            </li>
            <li class="flex flex-col gap-5">
                <h3>Informações</h3>
                <ul class="flex flex-col gap-2">
                    <li>
                        <RouterLink to="/about" class="hover:opacity-50">
                            <span>Sobre Nós</span>
                        </RouterLink>
                    </li>
                </ul>
            </li>
            <li class="flex flex-col gap-5">
                <h3>Modo Escuro</h3>
                <ToggleTheme variant="airplane" />
                <h3>Redes Sociais</h3>
                <Link href="https://github.com/isaukywhite/site-tw-projects" target="_blank">
                <div class="flex gap-3">
                    <GithubLogoIcon class="w-6 h-6" />
                    <span>Ver no GitHub</span>
                </div>
                </Link>
            </li>
        </ul>
        <ul class="grid grid-cols-5 bg-secondaryDarker w-full h-full lg:hidden">
            <li v-for="(data, i) in FooterDto" :key="i"
                :class="{ 'text-primary': route.path === data.path, 'cursor-pointer hover:text-primary duration-150 ease-in-out': true }">
                <RouterLink :to="data.path" class="flex flex-col items-center p-3">
                    <component :is="data.icon" class="w-6 h-6" />
                    <h5>{{ data.title }}</h5>
                </RouterLink>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
h3 {
    @apply text-text;
}
</style>
