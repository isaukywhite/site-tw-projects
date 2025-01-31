<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PocketBase from 'pocketbase';
import { useTwitchStore } from '@/stores/useTwitchStore';

const pb = new PocketBase('https://pocket.twitchprojects.com');
const users = ref([]);
const twitchStore = useTwitchStore();

async function fetchUsers() {
    const response = await pb.collection('raffle').getFullList({
        filter: `streamer="${twitchStore.username}"`,
    });
    users.value = response;
}

function handleUserChange(e) {
    if (e.record.streamer === twitchStore.username) {
        if (e.action === 'create') {
            users.value.push(e.record);
        } else if (e.action === 'update') {
            const index = users.value.findIndex(user => user.id === e.record.id);
            if (index !== -1) {
                users.value[ index ] = e.record;
            }
        } else if (e.action === 'delete') {
            users.value = users.value.filter(user => user.id !== e.record.id);
        }
    }
}

onMounted(async () => {
    await fetchUsers();
    pb.collection('raffle').subscribe('', handleUserChange);
});

onUnmounted(() => {
    pb.collection('raffle').unsubscribe('');
});
</script>

<template>
    <section class="flex flex-col gap-4 items-center text-center px-4 md:px-8">
        <h1 class="text-4xl md:text-6xl lg:text-7xl">Lista de Usuários</h1>
        <ul class="text-lg md:text-xl lg:text-2xl">
            <li v-for="user in users" :key="user.id">{{ user.username }}</li>
        </ul>
    </section>
</template>
