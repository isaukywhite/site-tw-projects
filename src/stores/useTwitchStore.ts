import {defineStore} from "pinia";
import {ref} from "vue";

export const useTwitchStore = defineStore("twitchName", () => {
	const username = ref("");

	function setUsername(name: string): void {
		username.value = name;
	}

	return {
		username,
		setUsername,
	};
});
