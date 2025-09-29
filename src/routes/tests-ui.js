import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/'));

test('h1', ({ page }) =>
	expect(page.locator('h1')).toContainText('svp (SvelteKit Proof)')
);

test('navigation', ({ page }) =>
  expect(page.locator('nav a')).toHaveText([
    'home',
    'markdown-page',
    'redirect',
    'app1',
    'app2',
    'hash-route',
  ])
);

test.describe('open-source', () => {

  test('text', ({ page }) =>
    expect(page.locator('small a')).toContainText('open-source')
  );

  test('href', ({ page }) =>
    expect(page.locator('small a')).toHaveAttribute('href', 'https://github.com/rosano/svp')
  );

})
