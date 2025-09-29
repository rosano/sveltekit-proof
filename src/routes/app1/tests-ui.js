import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/app1'));

test('h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('SPA')
);

test.describe('button', () => {

	test('text', ({ page }) =>
		expect(page.locator('button')).toContainText('Clicked 0 times')
	);

	test('click', async ({ page }) => {
		page.locator('button').click();

		await expect(page.locator('button')).toContainText('Clicked 1 time');

		await page.locator('button').click();

		await expect(page.locator('button')).toContainText('Clicked 2 times');
	});

});
