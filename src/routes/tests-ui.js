import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/'));

test('heading', ({ page }) =>
	expect(page.locator('h1')).toContainText('svp')
);

test('navigation items', async ({ page }) => {
	await expect(page.locator('nav a:nth-child(1)')).toBeVisible();

  await expect(page.getByRole('navigation')).toContainText('home');
  await expect(page.getByRole('navigation')).toContainText('markdown-page');
  await expect(page.getByRole('navigation')).toContainText('redirect');
  await expect(page.getByRole('navigation')).toContainText('app1');
  await expect(page.getByRole('navigation')).toContainText('app2');
});
