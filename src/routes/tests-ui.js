import { expect, test } from '@playwright/test';

test.beforeEach(({ page }) => page.goto('/'));

test('home page has expected h1', async ({ page }) => {
	await expect(page.locator('h1')).toContainText('test-sveltekit');
});

test('navigation items', async ({ page }) => {
	await expect(page.locator('nav a:nth-child(1)')).toBeVisible();

  await expect(page.getByRole('navigation')).toContainText('home');
  await expect(page.getByRole('navigation')).toContainText('guide');
  await expect(page.getByRole('navigation')).toContainText('redirect');
  await expect(page.getByRole('navigation')).toContainText('app1');
  await expect(page.getByRole('navigation')).toContainText('app2');
});
