import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app1'));

test('manifest', ({ page }) =>
	expect(page.locator('link[rel="manifest"]')).toHaveAttribute('href', '/manifest.json')
);

test('h1', ({ page }) =>
	expect(page.locator('h1')).toHaveText('SPA')
);

test.describe('button', () => {

	test('text', ({ page }) =>
		expect(page.locator('button')).toHaveText('Clicked 0 times')
	);

	test('click', async ({ page }) => {
		page.locator('button').click();

		await expect(page.locator('button')).toHaveText('Clicked 1 time');

		await page.locator('button').click();

		await expect(page.locator('button')).toHaveText('Clicked 2 times');
	});

});
