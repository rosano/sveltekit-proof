import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app2'));

test('page has h1', ({ page }) => 
	expect(page.locator('h1')).toContainText('SPA')
);

test('page has button', ({ page }) => 
	expect(page.locator('button')).toContainText('Remove first thing')
);

test('page has .thing', ({ page }) => 
	expect(page.locator('.thing')).toHaveCount(5)
);

test('page button removes items', async ({ page }) => {
	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(4);

	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(3);
});
