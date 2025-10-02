import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app2'));

test('h1', ({ page }) => 
	expect(page.locator('h1')).toHaveText('SPA')
);

test('button', ({ page }) => 
	expect(page.locator('button')).toHaveText('Remove first thing')
);

test('.thing', ({ page }) => 
	expect(page.locator('.thing')).toHaveCount(5)
);

test('page button removes items', async ({ page }) => {
	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(4);

	await page.locator('button').click();
	await expect(page.locator('.thing')).toHaveCount(3);
});
