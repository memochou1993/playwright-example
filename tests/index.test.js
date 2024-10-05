import { expect, test } from '@playwright/test';

test('Page should have the correct title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Vite App/);

  expect(await page.locator('h1').textContent()).toBe('Hello Vite!');

  const counter = page.locator('#counter');
  await counter.click({ clickCount: 5 });
  expect(await counter.textContent()).toBe('count is 5');
});
