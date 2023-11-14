export const js = () => {
	return app.gulp.src(app.path.dev.js)
	.pipe(app.gulp.dest(app.path.src.js))
	.pipe(app.plugins.browserSync.stream())
}
