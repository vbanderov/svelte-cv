# Resume built with Svelte Kit

This is my personal resume website built with Svelte Kit.

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Encryption

Since I did not want anyone to be able to see my email and phone number they are encrypted. If open the site without a password you won't see them, nor will you be able to download the PDF version. The password can be passed through hash URL, e.g. `https://vbanderov.github.io/svelte-cv/#password`. This way I can securely share it.

In order to update them you can run `npm run encrypt`. The password you enter also needs to be saved to `ENCRYPTION_PASSWORD` GitHub secret.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
