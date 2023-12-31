<p align="center">
	<img alt="prisjaktdark-logo" src="https://soitora.com/Prisjakt-Dark/images/banner.png" width="720">
</p>

## Contributions and Development

If you would like to contribute to this repository, please...

1. [![fork](https://user-images.githubusercontent.com/136959/42383736-c4cb0db8-80fd-11e8-91ca-12bae108bccc.png) Fork](https://github.com/Soitora/Prisjakt-Dark/fork) the repository then clone it locally.
2. Make sure you have these installed:

- You will need [Node.js](http://nodejs.org) **version 16+**, and [pnpm](https://pnpm.io/installation) **version 8+**.

1. Run `pnpm i` to install the necessary node packages.

2. Make sure your IDE or text editor such as Visual Studio Code / Notepad++ supports reading `.editorconfig`.

3. Modify `src/prisjakt-dark.styl`, it's the file that GitHub Actions uses to generate the final ones.

### Live editing methods

This project uses [`browser-sync`](https://www.npmjs.com/package/browser-sync) to inject the generated `.css` file into your browser.

#### Editing using a single script (Recommended)
You can get up and running by simply executing the command `pnpm local`.

This uses gulp to start the browser sync and in the same script also watch and generate changes done to `src/prisjakt-dark.styl`.

#### Generate and run server seperately
To generate `dist/prisjakt-dark.css` file once, run `pnpm stylus`, if you want it to generate the file every time changes occur to `src/prisjakt-dark.styl`, run `pnpm stylus-watch`.

You can run the `browser-sync` script with `pnpm browser-sync` and it will inject the `dist/prisjakt-dark.css` file onto a proxied version of `https://www.prisjakt.nu/` .
