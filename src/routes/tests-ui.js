import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/'));

test('heading', ({ page }) =>
	expect(page.locator('h1')).toContainText('svp')
);

test('navigation items', ({ page }) =>
  expect(page.locator('nav a')).toHaveText([
    'home',
    'markdown-page',
    'redirect',
    'app1',
    'app2',
    'hash-route',
  ])
);

test('open-source', ({ page }) => {
});
