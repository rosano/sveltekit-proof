export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		title: 'svp (SvelteKit Proof)',
		navigation: [
			{ path: '/', title: 'home' },
			{ path: '/markdown-page', title: 'markdown-page' },
			{ path: '/redirect', title: 'redirect' },
			{ path: '/app1', title: 'app1' },
			{ path: '/app2', title: 'app2' },
			{ path: '/hash-route', title: 'hash-route' },
		],
	};
}
