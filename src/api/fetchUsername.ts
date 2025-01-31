import { useTwitchStore } from "@/stores/useTwitchStore";

const VITE_TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;

export default async function fetchUserName(token: string) {
    const twitchStore = useTwitchStore();
    const response = await fetch("https://api.twitch.tv/helix/users", {
        headers: {
            Authorization: `Bearer ${token}`,
            "Client-Id": VITE_TWITCH_CLIENT_ID,
        },
    });
    const data = await response.json();
    twitchStore.setUsername(data.data[ 0 ].display_name);
}
