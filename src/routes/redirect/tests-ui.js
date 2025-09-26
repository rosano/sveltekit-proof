import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/redirect'));

test('redirects to /markdown-page', ({ page }) =>
	expect(new URL(page.url()).pathname).toBe('/markdown-page/')
);
