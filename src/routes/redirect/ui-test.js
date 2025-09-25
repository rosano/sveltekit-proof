import { expect, test } from '@playwright/test';

test('page has markdown h1', async ({ page }) => {
	await page.goto('/redirect');

	await expect(new URL(page.url()).pathname).toBe('/guide');
});
