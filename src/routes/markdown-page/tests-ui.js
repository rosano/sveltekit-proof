import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/markdown-page'));

test('markdown h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('markdown-page')
);
