/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					1: "rgb(var(--color-accent1) / <alpha-value>)",
					2: "rgb(var(--color-accent2) / <alpha-value>)",
				},
				bkg: "rgb(var(--color-bkg) / <alpha-value>)",
				content: "rgb(var(--color-content) / <alpha-value>)",
			}
		},
	},
	plugins: [],
}
