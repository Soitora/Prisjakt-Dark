import { create as bsCreate } from "browser-sync"
const browserSync = bsCreate()

browserSync.init({
	proxy: "https://www.prisjakt.nu",
	serveStatic: ["dist"],
	files: "dist/prisjakt-dark.css",
	snippetOptions: {
		rule: {
			match: /<\/head>/i,
			fn: function (snippet, match) {
				return `<link rel="stylesheet" type="text/css" href="/prisjakt-dark.css"/>$` + snippet + match
			}
		}
	}
})
