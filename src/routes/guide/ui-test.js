import { expect, test } from '@playwright/test';

test('page has markdown h1', async ({ page }) => {
	await page.goto('/guide');
	await expect(page.locator('h1')).toContainText('guide');
});
