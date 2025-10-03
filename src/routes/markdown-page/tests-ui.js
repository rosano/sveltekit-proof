import { test, expect } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/markdown-page'));

test('markdown h1', ({ page }) =>
	expect(page.locator('h1')).toHaveText('markdown-page')
);
