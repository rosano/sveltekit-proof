import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app2'));

test('page has h1', async ({ page }) => {
	await expect(page.locator('h1')).toContainText('SPA');
});

test('page has button', async ({ page }) => {
	await expect(page.locator('button')).toContainText('Remove first thing');
});

test('page has .thing', async ({ page }) => {
	await expect(page.locator('.thing')).toHaveCount(5);
});

test('page button removes items', async ({ page }) => {
	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(4);

	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(3);
});
