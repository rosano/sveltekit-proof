import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/redirect'));

test('page has markdown h1', async ({ page }) => {
	await expect(new URL(page.url()).pathname).toBe('/guide/');
});
