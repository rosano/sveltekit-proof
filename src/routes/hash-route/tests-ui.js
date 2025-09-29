import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/hash-route'));

test('page has h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('hash-route')
);

test('page has h2', ({ page }) =>
	expect(page.locator('h2')).toContainText('select route')
);

[
  'alfa',
  'bravo',
  'charlie',
].forEach(e => test('click ' + e, async ({ page }) => {
	await page.locator('button.' + e).click();

	expect(page.locator('h2')).toContainText('#' + e)
	expect(new URL(page.url()).hash).toBe('#' + e)
}));
