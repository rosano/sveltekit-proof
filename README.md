# svp (SvelteKit Proof)

Basic implementations of layers used in my app stack.

## Architecture

| layer | description |
| - | - |
| [SvelteKit](https://svelte.dev/docs/kit) | framework, UI components, routing and redirects, `vite`-fast builds |
| + [adapter-static](https://svelte.dev/docs/kit/adapter-static) | build as static site |
| + [mdsvex](https://mdsvex.pngwn.io/docs) | markdown content in `.md` files |
| [Vitest](https://vitest.dev) | logic tests |
| [Playwright](https://playwright.dev) | interface tests |

## Development

Install [Node.js and npm](https://nodejs.org/en/download/), then install the dependencies:

```sh
npm i
```

### Run

Start a development server:

```sh
npm run dev
```

Then type `o` + `Enter` or visit http://localhost:5173 in your browser.

### Test

Run logic tests:

```sh
npm run test:unit
```

Run interface tests:

```sh
npm run test:e2e
```

Run all tests:

```sh
npm run test
```

### Deploy

Build a production version:

```sh
npm run build
```

This will produce a static-site that can be deployed to GitHub Pages and other places.
