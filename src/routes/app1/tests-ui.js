import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app1'));

test('page has h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('SPA')
);

test('page has button', ({ page }) =>
	expect(page.locator('button')).toContainText('Clicked 0 times')
);

test('page button clicks', async ({ page }) => {
	await page.locator('button').click();

	await expect(page.locator('button')).toContainText('Clicked 1 time');

	await page.locator('button').click();

	await expect(page.locator('button')).toContainText('Clicked 2 times');
});
