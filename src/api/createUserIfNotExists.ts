import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocket.twitchprojects.com");

export default async function createUserIfNotExists(display_name: string) {
    try {
        await pb.collection("streamers").getOne(display_name);
    } catch (error) {
        const data = { id: display_name };
        await pb.collection("streamers").create(data);
    }
}
