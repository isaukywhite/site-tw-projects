import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
		meta: {
			title: "Home | Twitch projects",
			description:
				"Welcome to Twitch Projects, open source projects for the Twitch community and streamers.",
			keywords:
				"twitch, twitch projects, projects, streamers, gugasilvadev, dev_navarro, isaukywhite, twitch projects for streamers, twitch projects for developers, twitch projects for designers, twitch projects for content creators, twitch projects for gamers, twitch projects for youtubers, twitch projects for influencers, twitch projects for artists, twitch projects for musicians, twitch projects for photographers, twitch projects for videomakers",
			robots: "index, follow",
			ogTitle: "Home | Twitch projects",
			ogDescription:
				"Welcome to Twitch Projects, open source projects for the Twitch community and streamers.",
			ogImage: "/logo.svg",
		},
	},
	{
		path: "/about",
		name: "Sobre Nós",
		component: () => import("@/views/AboutView.vue"),
		meta: {
			title: "About Us | Twitch projects",
			description:
				"Welcome to Twitch Projects Team, open source projects for the Twitch community and streamers.",
			keywords:
				"twitch, twitch projects, projects, streamers, gugasilvadev, dev_navarro, isaukywhite, twitch projects for streamers, twitch projects for developers, twitch projects for designers, twitch projects for content creators, twitch projects for gamers, twitch projects for youtubers, twitch projects for influencers, twitch projects for artists, twitch projects for musicians, twitch projects for photographers, twitch projects for videomakers",
			robots: "index, follow",
			ogTitle: "About Us | Twitch projects",
			ogDescription:
				"Welcome to Twitch Projects Team, open source projects for the Twitch community and streamers.",
			ogImage: "/logo.svg",
		},
	},
	{
		path: "/redirect",
		name: "Redirect",
		component: () => import("@/views/RedirectView.vue"),
		meta: {
			title: "Redirect | Twitch projects",
			description:
				"Welcome to Twitch Projects Team, open source projects for the Twitch community and streamers.",
			keywords:
				"twitch, twitch projects, projects, streamers, gugasilvadev, dev_navarro, isaukywhite, twitch projects for streamers, twitch projects for developers, twitch projects for designers, twitch projects for content creators, twitch projects for gamers, twitch projects for youtubers, twitch projects for influencers, twitch projects for artists, twitch projects for musicians, twitch projects for photographers, twitch projects for videomakers",
			robots: "index, follow",
			ogTitle: "Redirect | Twitch projects",
			ogDescription:
				"Welcome to Twitch Projects Team, open source projects for the Twitch community and streamers.",
			ogImage: "/logo.svg",
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
