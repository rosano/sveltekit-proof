import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/guide'));

test('page has markdown h1', async ({ page }) => {
	await expect(page.locator('h1')).toContainText('guide');
});
