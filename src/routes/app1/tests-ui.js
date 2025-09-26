import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/app1');
});

test('page has h1', async ({ page }) => {
	await expect(page.locator('h1')).toContainText('SPA');
});

test('page has button', async ({ page }) => {
	await expect(page.locator('button')).toContainText('Clicked 0 times');
});

test('page button clicks', async ({ page }) => {
	await page.locator('button').click();

	await expect(page.locator('button')).toContainText('Clicked 1 time');

	await page.locator('button').click();

	await expect(page.locator('button')).toContainText('Clicked 2 times');
});
