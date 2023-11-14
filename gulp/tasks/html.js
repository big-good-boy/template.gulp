import fileInclude from 'gulp-file-include';

export const html = () => {
	return app.gulp.src(app.path.dev.html)
		.pipe(fileInclude())
		.pipe(app.gulp.dest(app.path.src.html))
		.pipe(app.plugins.browserSync.stream())
}
