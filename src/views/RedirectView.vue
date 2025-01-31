<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

onMounted(() => {
	const router = useRouter();
	const hash = window.location.hash.substring(1);
	const params = new URLSearchParams(hash);
	const accessToken = params.get("access_token");

	if (accessToken) {
		Cookies.set("access_token", accessToken, { secure: true, sameSite: "Strict" });
		router.push("/");
	} else {
		console.error("Erro de autenticação");
	}
});
</script>

<template>
	<div class="flex items-center justify-center h-screen">
		<p>Redirecionando...</p>
	</div>
</template>
