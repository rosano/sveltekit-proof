import { expect, test } from '@playwright/test';

test('navigation', async ({ request }) =>

  expect(await (await request.get('/manifest.json')).json()).toEqual(expect.objectContaining({
    name: 'svp-spa',
    short_name: 'svpsn',
    start_url: '/app1/',
  }))

);
