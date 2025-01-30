import {House, Ellipsis} from "lucide-vue-next";
import type {FunctionalComponent, HTMLAttributes, VNodeProps} from "vue";

interface FooterDto {
	title: string;
	path: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>;
}

export const FooterDto: FooterDto[] = [
	{
		title: "Explorar",
		path: "/",
		icon: House,
	},
	{
		title: "Sobre",
		path: "/about",
		icon: Ellipsis,
	},
];
