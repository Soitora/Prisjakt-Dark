import gulp from "gulp"
import stylus from "gulp-stylus"
import { create as bsCreate } from "browser-sync"
const browserSync = bsCreate()

gulp.task("default", function (done) {
	browserSync.init({
		proxy: "https://www.prisjakt.nu",
		serveStatic: ["../dist"],
		files: "../dist/prisjakt-dark.css",
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
					return `<link rel="stylesheet" type="text/css" href="/prisjakt-dark.css"/>` + snippet + match
				}
			}
		}
	})
	gulp.watch("../src/prisjakt-dark.styl", gulp.series("styl"))
	done()
})

gulp.task("styl", function () {
	return gulp.src("../src/prisjakt-dark.styl")
		.pipe(stylus())
		.pipe(gulp.dest("../dist/"))
		.pipe(browserSync.reload({ stream: true }))
})
