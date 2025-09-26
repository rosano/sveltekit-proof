import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/guide'));

test('page has markdown h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('guide')
);
