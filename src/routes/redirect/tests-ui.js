import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/redirect'));

test('redirects to /guide', ({ page }) =>
	expect(new URL(page.url()).pathname).toBe('/guide/')
);
