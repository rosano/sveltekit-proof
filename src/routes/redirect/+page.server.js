import { redirect } from '@sveltejs/kit';

// Or in a +page.server.js file
export const load = async (event) => {
  throw redirect(301, '/markdown-page');
};
