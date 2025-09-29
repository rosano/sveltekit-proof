import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/hash-route'));

test('h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('hash-route')
);

test('h2', ({ page }) =>
	expect(page.locator('h2')).toContainText('select route')
);

[
  'alfa',
  'bravo',
  'charlie',
].forEach(e => test.describe(e, () => {

	test.beforeEach(({ page }) => page.locator('button.' + e).click())

	test('h1', ({ page }) =>
		expect(page.locator('h2')).toContainText('#' + e)
	);

	test('hash', ({ page }) =>
		expect(new URL(page.url()).hash).toBe('#' + e)
	);

}));
